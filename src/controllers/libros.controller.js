const libroCtrl = {}

const Libro = require('../models/libro')

libroCtrl.getLibros = async (req, res) => {
    const libros  = await Libro.find()
    res.json(libros)
};
libroCtrl.createLibro = async (req, res) =>{
    const newLibro = new Libro(req.body)
    await newLibro.save()
    res.send({message:'Libro creado con exito'})
};
libroCtrl.getLibro = async (req, res) =>{
    const libro = await Libro.findById(req.params.id)
    res.send(libro)
};
libroCtrl.editLibro = async (req, res) =>{
    await Libro.findByIdAndUpdate(req.params.id, req.body)
    res.json({message:'libro actualizado'})

}

libroCtrl.deleteLibro = async (req, res) =>{
    await Libro.findByIdAndDelete(req.params.id)
    res.json({status: 'libro eliminado'})
};


module.exports = libroCtrl 