// Importação do express module
import { Request, Response } from 'express'; 

// Importação do model Pet
import { Pet } from '../models/pet';

// Importação da função createMenuObjects
import { createMenuObjects } from '../helpers/createMenuObjects'; 

// Função que renderiza a página de busca
export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string; // Recebe o valor da query da URL
    let list = Pet.getFromName(query); // Busca os pets pelo nome
    if(!query) { // Se não houver query
        res.redirect('/'); // Redireciona para a home
        return; // Encerra a função
    }
    res.render('pages/page', { // Renderiza a página home.mustache
        menu: createMenuObjects(''),
        list,
        query
    });
}