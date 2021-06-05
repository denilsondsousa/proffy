<h1 align="center">
    <img alt="Proffy" src="proffy.svg" width="100%"/>
    <br>Next Level Week #2<br/>
    Node.js | ReactJS | React Native
</h1>

<p align="center">
  <a href="#notebook_with_decorative_cover-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-executando">Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#page_facing_up-licença">Licença</a>
</p>

## :notebook_with_decorative_cover: Sobre

Essa aplicação foi desenvolvida durante a Next **Level Week #2** da [Rocketseat](https://rocketseat.com.br/).
O Proffy é uma plataforma de estudos online. Nessa aplicação temos 2 tipos de usuários: Aluno e Professor. A plataforma permite o professor realizar seu cadastro, sendo necessário alguns dados pessoais, número para contato (Whatsapp) e os horários disponíveis para lencionar aulas. Já o aluno pode realizar a busca por um professor utilizando filtros como a disciplina, dia e da semana e o horário.

## :computer: Tecnologias
- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [axios](https://github.com/axios/axios)
- [knex](http://knexjs.org/)
- [ReactJS](https://reactjs.org/)
- [React Native](http://facebook.github.io/react-native/)
- [Expo](https://expressjs.com/)


## :rocket: Executando

- ### **Pré-requisitos**
  - **[Node.js](https://nodejs.org/en/)**
  - **[Git](https://git-scm.com/)**
  - Um gerenciador de Pacotes: **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
  - [Expo](https://expressjs.com/)

1. Faça um clone do repositório:
```sh
  git clone https://github.com/denilsondsousa/proffy
```

2. Para executar a aplicação:
```sh
  #API
  $cd server
  # Primeiro: instale as dependências do projeto
  $ yarn # ou npm install
  # Segundo: Configure o banco de dados e as tabelas
  $ yarn knex:migrate # ou npm run knex:migrate
  
  # Inicializando a aplicação:
  $ yarn start # ou npm start
  
  #Aplicação Web
  $cd web
  # Instale as dependências do projeto
  $ yarn # ou npm install
  # Inicie a aplicação web
  $ yarn start # ou npm start
  
  #Aplicação Mobile
  $ cd mobile
  # Instale as dependências do projeto
  $ yarn # ou npm install
  # Inicie a aplicação mobile
  $ yarn start # ou npm start
```

## :page_facing_up: Licença
Esse projeto está sob a licença MIT.

---
<sup>Projeto desenvolvido com a tutoria de [Diego Fernandes](https://github.com/diego3g), da [Rocketseat](rocketseat.com.br).</sup>
