const express = require('express');
const methodOverride = require('method-override');
const session = require('express-session');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.urlencoded({extended: false}));
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
    console.log('server on el puerto', app.get('port'));
});