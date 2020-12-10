const mongoose= require ('mongoose')

mongoose.connect('mongodb+srv://admin:1234567890@cluster0.i0pvv.mongodb.net/Libreria',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify:false
})
.then((db) => console.log("Base de datos Online"))
.catch((err) => console.error(err));