const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const usuarioSchema = new schema({
    correo: {type: String, required: true, unique: true},
    pass: {type: String, required: true}
});

usuarioSchema.methods.encriptarPass = async (pass) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(pass, salt);
}

usuarioSchema.methods.compararPass = function (pass) {
    return bcrypt.compare(pass, this.pass)
}

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;