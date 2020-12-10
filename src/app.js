const express = require('express')
const morgan = require('morgan')
const cors = require('cors');

const app = express()

app.set('port', process.env.PORT || 3000);

app.use(cors())
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get('/', function(req, res){
    res.send('<h1>Bienvenido a mi servidor rest (localhost)</h1>');
})
app.use("/libro", require('./routes/libros.routes'))

module.exports = app;