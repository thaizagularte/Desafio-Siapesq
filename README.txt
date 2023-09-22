#Funcionalidades
    A aplicação tem as rotas para realizar a criação de um novo personagem, a edição e exclusão pelo id

#Certifique que tem as ferramentas necessárias 
    Execute no terminal 
    npm install  express @types/express typescript ts-node nodemon prisma @prisma/client pg @types/node -D
    npm install cors

#Para rodar a aplicação
    Crie um banco de dados postgres com nome: db_characters
    Entre no arquivo .env e altere a URL do banco de acordo com o seu "postgresql://usuário:sua-senha@localhost:5432/db_characters"
    Execute o comando npx prisma migrate dev 
        para criação da tabela
    Execute no seu terminal o arquivo searchApi.ts para buscar os dados da API e adicionar no banco local
        npx ts-node  ./src/searchApi.ts
    Abra dois terminais para poder executar a aplicação
        No 1° execute npx ts-node src/server.ts (Espere a mensagem de que servidor esta conectado)
        No 2° Certifique de estar no caminho desafio-siapesq/interface e execute o npm install para então executar  comando npm start src/App.js
