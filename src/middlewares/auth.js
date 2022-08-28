const auth = {
    // verificar se o usuário está logado
    account: (req, res, next) => {
        if (typeof (req.session.user) != "undefined") {
            return next();
        } else {
            return res.render('/users/login');
        }
    }
};

//ps: falta importar na rota

module.exports = auth;