const { Router } =require('express')
const router = Router()

const librosCtrl = require('../controllers/libros.controller.js')


router.get('/', librosCtrl.getLibros);
router.post('/', librosCtrl.createLibro);
router.get('/:id', librosCtrl.getLibro);
router.put('/:id', librosCtrl.editLibro);
router.delete('/:id', librosCtrl.deleteLibro);

module.exports = router