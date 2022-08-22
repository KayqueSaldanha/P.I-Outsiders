// Função criada para ativar o menu selecionado pelo usuário
const createMenuObject = function (activeMenu) {
    let returnObject = {
        homem: false,
        mulher: false
    }

    if (activeMenu !== returnObject) {
        returnObject[activeMenu] = true
    }

    return returnObject
}

module.exports.createMenuObject = createMenuObject;