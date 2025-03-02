import express from 'express'; // Importando o express
import dotenv from 'dotenv'; // Importando o dotenv
import mustache from 'mustache-express';   // Importando o mustache
import path from 'path'; // Importando o path
import mainRoutes from './routes/index'; // Importando as rotas

dotenv.config(); // Carregando as variáveis de ambiente

const server = express(); // Inicializando o servidor
server.set('view engine', 'mustache'); // Definindo o motor de visualização
server.set('views', path.join(__dirname, 'views')); // Definindo o diretório de views
server.engine('mustache', mustache()); // Definindo o motor de visualização

server.use(express.static(path.join(__dirname, '../public'))); // Definindo o diretório de arquivos estáticos

// Rota principal
server.use(mainRoutes); // Definindo as rotas

server.use((req, res) => { // Rota de erro
    res.send('Página não encontrada!'); // Mensagem de erro
});

server.listen(process.env.PORT); // Inicializando o servidor na porta definida no arquivo .env