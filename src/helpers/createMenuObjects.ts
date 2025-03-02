type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish'; // Definição do tipo MenuOptions

export const createMenuObjects = (activeMenu: MenuOptions) => { // Função que cria um objeto com as opções de menu
    let returnObject = { // Objeto que será retornado
        all: false,
        dog: false,
        cat: false,
        fish: false
    };

    if (activeMenu !== ''){ // Se activeMenu for diferente de vazio
        returnObject[activeMenu] = true;
    }

    return returnObject; // Retorna o objeto
}