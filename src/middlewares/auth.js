const auth = {
    // verificar se o usuário está logado
    account: (req, res, next) => {
        if (typeof (req.session.user) != "undefined") {
            return next();
        } else {
            return res.render('/users/login');
        }
    },

    // ==================================================
// Middleware para verificar se o usuário está logado
// E permitir o acesso a páginas restritas
// ==================================================
    userIsAuthenticated: (req, res, next) => {
        // Verifica se o usuário está logado
        // Ou seja, se existe uma sessão para o usuário
        if (req.session.user == undefined) {
            // Se não estiver logado, redireciona para a página de login
            return res.redirect('/users/login');
        }
        // Se estiver logado, continua a execução
        next()
    }
}

    //ps: falta importar na rota

    module.exports = auth;