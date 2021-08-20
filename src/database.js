const mongoose = require('mongoose');


const usuario = 'londo';
const pass = '392Azj0O4UY9CP4X';
const database = 'gamerm';
const uri = `mongodb+srv://${usuario}:${pass}@cluster0.axn1l.mongodb.net/${database}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => console.log('base de datos conectada'))
    .catch(e => console.log(e))