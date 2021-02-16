# Ecoleta

## Introdução

Saudações!!!

Esse projeto foi criado para estudo, durante a  __01ª Next Level Week (NLW)__, realizada pela [Rocketseat](https://rocketseat.com.br/), tendo como cenário fictício para o seu desenvolvimento, uma ferramenta para cadastro de pontos de coletas de items recicláveis, facilitando assim com que as pessoas os encontrem e contribuam com o meio ambiente.

## Observações

Abaixo segue uma lista com observções para te ajudar, durante a leitura, no compreendimento dos textos:

* O termo __dispositivo móvel__, durante todo a leitura desse arquivo `readme.md`, refere-se apenas aos __smartphones__ e __tablets__;

* Na seção [__Organização do Projeto__](#organização-do-projeto), detalhei quais são as partes que compõem esse projeto pois, dessa forma, ficará claro compreender quais são seus respectivos __escopos__. 

## Organização do Projeto

O projeto está dividido em três partes, são essas:

* __Backend__, em que encontra-se a __regra de negócio__ e as __funcionalidades__ desse projeto;

* __Web__, em que encontra-se a __interface__ usada em __navegadores WEB__ e, por último o;

* __Mobile__, em que encontra-se a __interface__ usada pelo __App__ em __dispositivos móveis__.

__Web__ refere-se ao uso da interface a partir de navegadores WEB, _indiferentemente_ do tamanho e/ou resolução de tela, ou seja, esse acesso pode ocorrer também a partir de navegadores WEB presentes em dispositivos móveis.

__Mobile__ refere-se ao uso da interface a partir de um App de dispositivo móvel.

Em resumo, entenda que o __Web__ e o __Mobile__ são escopos diferentes dentro do projeto, ou seja, eles não se relacionam. O que eles tem em comum _apenas_ é o __Backend__ que _serve_ __recursos__ para ambos.

## Tecnologias

Abaixo segue a lista com as principais tecnologias dentre todas aquelas que foram utilizadas nesse projeto:

* [Celebrate](https://github.com/arb/celebrate) - Validador de dados presentes na requisição a partir de uma rota que disponibiliza um determinado recurso;
* [Express](https://expressjs.com/) - Framework JavaScript responsável pela construção do servidor HTTP;
* [Knex](http://knexjs.org/) - Abstração a partir de funções JavaScript para o uso de diferentes BD (Banco de Dados);
* [Sqlite3](https://github.com/kriasoft/node-sqlite) - SGBD (Sistema Gerenciador de Banco de Dados);
* [Axios](https://github.com/axios/axios) - Centralizador dos endpoints da api em uma mesma `BASE_URL` para auxilar na criação das requisições no código;
* [React](https://reactjs.org/) - Framework JavaScript responsável pela construção da SPA (Single Page Application) no __Web__;
* [React Native](https://reactnative.dev/) - Framework JavaScript responsável pela construção do App para dispositivos móveis no __Mobile__;
* [Expo](https://expo.io/) - Ferramenta que auxilia na construção do App para dispositivos móveis.
* [TypeScript](https://https://www.typescriptlang.org/)

## Pré-requisitos

Para rodar esse projeto é necessário ter as tecnologias abaixo com suas respectivas versões:

* [Node.js 12.16.3](https://nodejs.org/download/release/v12.16.3/)
* NPM 6.14.4

> Por padrão, quando se instala o Node.js, ele vem com o NPM incluso na instalação. 

Certifique-se de, quando for instalar o `Node.js 12.16.3`, ele venha com a versão `6.14.4` do `NPM`. Podemos coferir isso com o seguinte comando:

```sh
$ npm -v
```

## Instalação

Com a versão correspondente daquelas tecnologias definidas em [__Pré-requisitos__](#pre-requisitos), entre dentro das pastas `/backend`, `/frontend` e `/mobile` e execute, em cada uma delas, o seguinte comando:

```sh
$ npm install
```

### /backend
----

#### API

As APIs serão usadas para fazermos requisições ao servidor HTTP presente no __backend__. Abaixo segue uma tabela com cada uma delas:

| Verbo  | API                              | Descrição                                                                                     |
|--------|----------------------------------|-----------------------------------------------------------------------------------------------|
| GET    | `http://localhost:3333/items`  | Busca por todos os __Itens__ cadastrados e aceitos para a coleta. ~~Veja o exemplo~~ (**_Em breve_**)                 |
| GET    | `http://localhost:3333/points`       | Busca por todos os __Pontos__ de coletas cadastrados de acordo com a _query_ aplicada (city, uf e [__Itens__]) .  ~~Veja o exemplo~~ (**_Em breve_**)                 |
| GET    | `http://localhost:3333/points/:id`    | Busca pelo __Ponto__ de coleta a partir do seu código de identificação (id). ~~Veja o exemplo~~ (**_Em breve_**) |
| POST   | `http://localhost:3333/points`  | Cria um novo registro de __Ponto__ de coleta.  ~~Veja o exemplo~~ (**_Em breve_**)                       |

#### Banco de Dados

Temos que ter um BD do projeto rodando na máquina local, do contrário, não será possível fazer as operações de `Create` (Criação), `Read` (Consulta), `Update` (Atualização) e `Delete` (Destruição) ou, de forma abreviada, o `CRUD` que corresponde as opereções principais que fazemos ao usar o BD.

Nesse projeto, quem se incumbe de cuidar da criação do BD e das suas operações CRUD é o `Knex.js`. 

Dado a sua necessidade, dentro da pasta `/backend`, execute o comando a seguir:

```sh
# Executa o(s) arquivo(s) de criação do BD que estão dentro da pasta 'src/database/migrations'

$ npm run knex:migrate

# Alimente a(s) tabelas(s) do BD que estão dentro da pasta 'src/database/migrations' 
# usando dados pré-definidos em 'src/database/seeds'

$ npm run knex:seed
```

Após a criação do BD, podemos comaçar a usar as operações CRUD _mas_, antes disso, temos que colocar o `servidor HTTP` para trabalhar. Isso é necessário pois essa será a forma que o __Web__ e o __Mobile__ consiguirá fazer as requisições ao __Backend__ e ele, por sua vez, irá processar, preparar e responder a quem a solicitou.

Dado as informações acima, execute:

```sh
# Inicia o "servidor HTTP" presente no "/backend"

$ npm run dev
```

### /web
----

```sh
# Inicia o "/web"

$ npm start
```

### /mobile
----

```sh
# Instala na máquina, de forma 'global', o 'CLI' do 'expo'

$ npm install -g expo-cli

# Inicia o "/mobile"

$ npm run start
```



