const pageController = {
    information: (req, res) => {
        res.render('information');
    },

    department: (req, res) => {
        res.render('department');
    },

    account: (req, res) => {
        res.render('account');
    },

    produtos: (req, res) => {
        res.render('produtos');
    },

    login: (req, res) => {
        res.render('login');
    },

    cadastro: (req,res) => {
        res.render('cadastro');
    }

}

module.exports = pageController;