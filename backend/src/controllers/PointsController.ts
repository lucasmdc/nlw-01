import { Request, Response } from 'express'
import knex from '../database/connection'

class PointsController {
    async index(req: Request, res: Response) {
        const { city, uf, items } = req.query

        const parsedItems = String(items).split(',').map(item => Number(item.trim()))
        const points = await knex('points')
            .join('point_items', 'points.id', '=', 'point_items.point_id')
            .whereIn('point_items.item_id', parsedItems)
            .where('city', String(city))
            .where('uf', String(uf))
            .distinct()
            .select('points.*')
        
        const serializedPoints = points.map( point => {
            return {
                ...points,
                image_url: `http://192.168.0.101:3333/uploads/${point.image}`
            }
        })
        
        
        return res.json(serializedPoints)
    }
    async show(req: Request, res: Response) {
        const { id } = req.params

        const point = await knex('points').where('id',id).first()

        if(!point){
            return res.status(400).json({ message: "point is not exist"})
        }

        const serializedPoint = {
            
            ...point,
            image_url: `http://192.168.0.101:3333/uploads/${point.image}`
            
        }

        const items = await knex('items')
            .join('point_items','items.id','=','point_items.item_id')
            .where('point_items.point_id', id).select('items.title')

        return res.json({serializedPoint, items})
    }
    async create(req: Request, res: Response) {
        const { image,
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items } = req.body

        const point = {
            image: req.file.filename,
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        }
        
        const trx = await knex.transaction()
    
        const insertedIds = await trx('points').insert(point)
    
        const point_id = insertedIds[0]
    
        const pointItems = items
        .split(',')
        .map((item: string) => Number(item.trim()))
        .map((item_id: number) => {
            return {
                point_id,
                item_id
            }
        })
    
        await trx('point_items').insert(pointItems)

        await trx.commit()
    
        return res.json({id: point_id, ...point})
    }
}

export default PointsController