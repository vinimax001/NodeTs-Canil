import { Request, Response } from 'express'; // Importação do express module

import { createMenuObjects } from '../helpers/createMenuObjects'; // Importação da função createMenuObjects

export const home = (req: Request, res: Response) => { // Função que renderiza a página inicial
    res.render('pages/page', { // Renderiza a página home.mustache
        menu: createMenuObjects('all'), // Seleciona o menu com a opção 'all' ativa
        banner:{
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    }); 
}

export const dogs = (req: Request, res: Response) => { // Função que renderiza a página de cachorros
    res.render('pages/page', { // Renderiza a página dogs.mustache
        menu: createMenuObjects('dog'), // Seleciona o menu com a opção 'dog' ativa
        banner:{
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        }
    });
}

export const cats = (req: Request, res: Response) => { // Função que renderiza a página de gatos
    res.render('pages/page',{ // Renderiza a página cats.mustache
        menu: createMenuObjects('cat'), // Seleciona o menu com a opção 'cat' ativa
        banner:{
            title: 'Gatos',
            background: 'banner_cat.jpg'
        }
    }); 
} 

export const fishes = (req: Request, res: Response) => { // Função que renderiza a página de peixes
    res.render('pages/page', { // Renderiza a página fishes.mustache
        menu: createMenuObjects('fish'), // Seleciona o menu com a opção 'fish' ativa
        banner:{
            title: 'Peixes',
            background: 'banner_fish.jpg'
        }
    }); 
}