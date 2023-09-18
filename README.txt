#Funcionalidades
    A aplicação tem as rotas para realizar a criação de um novo personagem, a edição e exclusão pelo id
    *Mas funçao de edição não foi configurada para o usuário

#Certifique que tem as ferramentas necessárias 
    Execute no terminal 
    npm install  express @types/express typescript ts-node nodemon prisma @prisma/client pg @types/node -D
    npm install cors

#Para rodar a aplicação
    Crie um banco de dados postgres com nome: db_characters
    Execute no seu terminal o arquivo searchApi.ts
        npx ts-node  ./src/searchApi.ts
    Abra dois terminais para poder executar a aplicação
        No 1° execute npx ts-node .src/server.ts (Espere a mensagem de que servidor esta conectado)
        No 2° Certifique de estar no caminho desafio-siapesq/interface,execute o npm install para então executar  comando npm start ./src/App.js
