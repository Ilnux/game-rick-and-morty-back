const enrutador = require('express').Router();

enrutador.get('/', (req, res) => {
    res.send('Index');
})

module.exports = enrutador;

