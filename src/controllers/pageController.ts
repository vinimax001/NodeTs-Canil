import { Request, Response } from 'express'; // Importação do express module

export const home = (req: Request, res: Response) => { // Função que renderiza a página inicial
    res.render('pages/page', { // Renderiza a página home.mustache
        banner:{
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    }); 
}

export const dogs = (req: Request, res: Response) => { // Função que renderiza a página de cachorros
    res.render('pages/page', { // Renderiza a página dogs.mustache
        banner:{
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        }
    });
}

export const cats = (req: Request, res: Response) => { // Função que renderiza a página de gatos
    res.render('pages/page',{ // Renderiza a página cats.mustache
        banner:{
            title: 'Gatos',
            background: 'banner_cat.jpg'
        }
    }); 
} 

export const fishes = (req: Request, res: Response) => { // Função que renderiza a página de peixes
    res.render('pages/page', { // Renderiza a página fishes.mustache
        banner:{
            title: 'Peixes',
            background: 'banner_fish.jpg'
        }
    }); 
}