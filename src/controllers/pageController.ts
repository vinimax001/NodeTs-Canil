import { Request, Response } from 'express'; // Importação do express module

export const home = (req: Request, res: Response) => { // Função que renderiza a página inicial
    res.send('Página inicial!'); // Mensagem de página inicial
    //res.render('pages/page'); // Renderiza a página home.mustache
}

export const dogs = (req: Request, res: Response) => { // Função que renderiza a página de cachorros
    //res.render('pages/dogs'); // Renderiza a página dogs.mustache
}

export const cats = (req: Request, res: Response) => { // Função que renderiza a página de gatos
    //res.render('pages/cats'); // Renderiza a página cats.mustache
} 

export const fishes = (req: Request, res: Response) => { // Função que renderiza a página de peixes
    //res.render('pages/fishes'); // Renderiza a página fishes.mustache
}