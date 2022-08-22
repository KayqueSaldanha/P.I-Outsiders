const createMenuObject = (activeMenu) => {
    let returnObject = {
        man: false,
        woman: false,
        accessories: false,
        promos: false,
        newIn: false,
        commingSoon: false
    };

    if(activeMenu !== returnObject) {
        returnObject[activeMenu] = true
    };

    return returnObject
};

module.exports.createMenuObject = createMenuObject;