const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const methodOverride = require('method-override');

// Importação de Rotas
const indexRouter = require('./src/routes/index');
const publicRoute = require('./src/routes/publicRoute');
const privateRoute = require('./src/routes/privateRoute');
const checkout = require('./src/routes/checkout');
const carrinho = require('./src/routes/carrinho');

// Importação de Middlewares
const userIsAuthenticated = require('./src/middlewares/userIsAuthenticated');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

// permitir que o servidor use o método PUT e DELETE
app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: "Outsider",
  resave: true,
  saveUninitialized: true
}));

// Rotas
app.use('/', carrinho);
app.use('/', indexRouter);
app.use('/', publicRoute);
app.use(userIsAuthenticated);
app.use('/', privateRoute);
app.use('/', checkout);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
