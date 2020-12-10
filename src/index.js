require('./database')
const app = require('./app')

app.listen(app.get('port'));
console.log('El servidor esta en linea por el puerto', app.get('port'));