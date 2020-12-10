const {Schema, model} = require ('mongoose')

const libroSchema = new Schema({
    clave:{
        type: Number,
        unique: true,
        required: [true, 'Oviamente la clave es necesaria']
    },

    nombre: {
        type: String,
        required: [true, 'El nombre es necesario wey']
    },

    isbn:{
        type: String,
        unique: true,
        required: [true, "el isbn es necesario"]
    },

    editorial:{
        type: String,
        required: [true, 'la editorial es necesario']
    },

    autor:{
        type: String,
        required: [true, 'el autor es necesario pinche madre']
    },

    anio:{
        type: Number,
        required: [true, 'El año pus tambien']
    }

}, {
    timesstamps:true,
    versionKey: false
})

module.exports = model("Employee", libroSchema);