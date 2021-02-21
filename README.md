# Server Web 2 - Atividade 2

Essa atividade2 tem como o objetivo ensinar através da pratica a criação de uma api utilizando o node.js,
O Node.JS é um framework completo para o javascript com o foco em programação backend.

## Serviços

- GET:/users -> Lista informações de todos usuários.
- GET:/users/id -> Lista informações de um usuário especificado através do parametro id passado pela rota.
- POST:/users -> Cria um novo registro no banco na tabela de usuários através de um JSON de informações passadas por request.
- PUT:/users/id -> Atualiza um registro no banco na tabela de usuários através de um JSON de informações passadas por request e pelo parametro id passado pela rota.
- DELETE:/users/id -> Deleta um registro no banco na tabela de usuários através do parametro id passado pela rota.

## Instalação

Atividade2 precisa de [Node.js](https://nodejs.org/) para funcionar.

Instale as dependencias junto com o node em seu computador, clone o projeto, e rode a instalação do express na pasta clonada.

```sh
cd atividade2
npm install express
node server.js
```
