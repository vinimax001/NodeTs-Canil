import { Router } from 'express'; // Importação do express module
import * as PageController from '../controllers/pageController'; // Importação do controller
import * as SearchController from '../controllers/searchController'; // Importação do controller da pesquisa
const router = Router(); // Criação de uma instância do Router 

router.get('/', PageController.home); // Rota principal
router.get('/dogs', PageController.dogs); //Rota de pesquisa de cachorros
router.get('/cats', PageController.cats); //Rota de pesquisa de gatos
router.get('/fishes', PageController.fishes); //Rota de pesquisa de peixes
router.get('/search', SearchController.search); // Rota de pesquisa

export default router; // Exportação do router