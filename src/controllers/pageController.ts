// Importação do express module
import { Request, Response } from 'express';

// Importação da função createMenuObjects
import { createMenuObjects } from '../helpers/createMenuObjects'; 

// Função que renderiza a página inicial
export const home = (req: Request, res: Response) => { 
    res.render('pages/page', { // Renderiza a página home.mustache
        menu: createMenuObjects('all'), // Seleciona o menu com a opção 'all' ativa
        banner:{
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    }); 
}

// Função que renderiza a página de cachorros
export const dogs = (req: Request, res: Response) => { 
    res.render('pages/page', { // Renderiza a página dogs.mustache
        menu: createMenuObjects('dog'), // Seleciona o menu com a opção 'dog' ativa
        banner:{
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        }
    });
}

// Função que renderiza a página de gatos
export const cats = (req: Request, res: Response) => { 
    res.render('pages/page',{ // Renderiza a página cats.mustache
        menu: createMenuObjects('cat'), // Seleciona o menu com a opção 'cat' ativa
        banner:{
            title: 'Gatos',
            background: 'banner_cat.jpg'
        }
    }); 
} 

// Função que renderiza a página de peixes
export const fishes = (req: Request, res: Response) => { 
    res.render('pages/page', { // Renderiza a página fishes.mustache
        menu: createMenuObjects('fish'), // Seleciona o menu com a opção 'fish' ativa
        banner:{
            title: 'Peixes',
            background: 'banner_fish.jpg'
        }
    }); 
}