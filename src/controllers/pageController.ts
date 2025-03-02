// Importação do express module
import { Request, Response } from 'express';

// Importação do model pet
import { Pet } from '../models/pet';

// Importação da função createMenuObjects
import { createMenuObjects } from '../helpers/createMenuObjects'; 

// Função que renderiza a página inicial
export const home = (req: Request, res: Response) => {
    let list = Pet.getAll(); // Recebe a lista de animais
    res.render('pages/page', { // Renderiza a página home.mustache
        menu: createMenuObjects('all'), // Seleciona o menu com a opção 'all' ativa
        banner:{
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list // Passa a lista de todos animais para a página
    }); 
}

// Função que renderiza a página de cachorros
export const dogs = (req: Request, res: Response) => { 
    let list = Pet.getFromtype('dog'); // Recebe a lista de cachorros
    res.render('pages/page', { // Renderiza a página dogs.mustache
        menu: createMenuObjects('dog'), // Seleciona o menu com a opção 'dog' ativa
        banner:{
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list // Passa a lista de cachorros para a página
    });
}

// Função que renderiza a página de gatos
export const cats = (req: Request, res: Response) => { 
    let list = Pet.getFromtype('cat'); // Recebe a lista de gatos
    res.render('pages/page',{ // Renderiza a página cats.mustache
        menu: createMenuObjects('cat'), // Seleciona o menu com a opção 'cat' ativa
        banner:{
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list // Passa a lista de gatos para a página
    }); 
} 

// Função que renderiza a página de peixes
export const fishes = (req: Request, res: Response) => { 
    let list = Pet.getFromtype('fish'); // Recebe a lista de peixes
    res.render('pages/page', { // Renderiza a página fishes.mustache
        menu: createMenuObjects('fish'), // Seleciona o menu com a opção 'fish' ativa
        banner:{
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list // Passa a lista de peixes para a página
    }); 
}