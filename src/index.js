const express = require('express');
const methodOverride = require('method-override');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
require('./database')

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({extended: false}));(
app.use(bodyParser.json()))
app.use(methodOverride('_method'));
app.use(session({
    secret: 'rickAndMorty',
    resave: true,
    saveUninitialized: true
}));

//rutas
app.use(require('./rutas/index'));
app.use(require('./rutas/usuarios'));

app.listen(app.get('port'), () => {
    console.log('servidor encendido en el puerto', app.get('port'));
});