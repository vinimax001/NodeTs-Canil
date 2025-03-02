// Importando o express
import express from 'express';

// Importando o dotenv
import dotenv from 'dotenv';

// Importando o mustache
import mustache from 'mustache-express';

// Importando o path
import path from 'path';

// Importando as rotas
import mainRoutes from './routes/index';

// Carregando as variáveis de ambiente
dotenv.config();

// Inicializando o servidor
const server = express();

// Definindo o motor de visualização
server.set('view engine', 'mustache');

// Definindo o diretório de views
server.set('views', path.join(__dirname, 'views'));

// Definindo o motor de visualização
server.engine('mustache', mustache());

// Definindo o diretório de arquivos estáticos
server.use(express.static(path.join(__dirname, '../public')));

// Rota principal

// Definindo as rotas
server.use(mainRoutes);

// Rota de erro 404
server.use((req, res)=>{
    res.render('pages/404'); // Renderiza a página 404.mustache
});

// Inicializando o servidor na porta definida no arquivo .env
server.listen(process.env.PORT);