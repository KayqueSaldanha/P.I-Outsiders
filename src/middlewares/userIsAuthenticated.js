// ==================================================
// Middleware para verificar se o usuário está logado
// E permitir o acesso a páginas restritas
// ==================================================

const userIsAuthenticated = (req, res, next) => {
  // Verifica se o usuário está logado
  // Ou seja, se existe uma sessão para o usuário
  if (!req.session.user) {
    // Se não estiver logado, redireciona para a página de login
    return res.redirect('/login');
  }  
  // Se estiver logado, continua a execução
  next();
}

module.exports = userIsAuthenticated;