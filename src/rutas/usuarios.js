const enrutador = require('express').Router();
const Usuario = require('../modelos/usuario')

enrutador.post('/registro', async (req, res) => {

    try {
        const {correo, pass} = req.body;
        const errors = [];
        if (await Usuario.exists({correo: correo})) {
            errors.push({'mensaje': 'El correo ya esta en uso'});
            res.status(404).send(errors);

        } else {
            const nuevoUsuario = new Usuario({correo, pass})
            nuevoUsuario.pass = await nuevoUsuario.encriptarPass(pass);
            await nuevoUsuario.save();
            res.status(200).send({
                'estado': 'ok',
                'mensaje': 'Usuario registrado con exito'
            });
        }
    } catch (e) {
        console.log(e)
    }

});

enrutador.post('/login', (req, res) => {
    console.log(req.body);
    res.status(200).send('sas')
});

enrutador.get('/logout', (req, res) => {
    res.send('logout ');
});


module.exports = enrutador;

