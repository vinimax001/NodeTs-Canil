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

// Definindo as rotas
server.use(mainRoutes);

// Rota de erro 404
server.use((req, res)=>{
    res.render('pages/404'); // Renderiza a página 404.mustache
});


const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000; // Converte para número e define um padrão

server.listen(PORT, '0.0.0.0', () => { 
    // Usando 'server' e '0.0.0.0'
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});