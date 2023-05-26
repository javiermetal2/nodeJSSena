/** Requerir un modulo que se conecte a mongodb, por eso necesatamos a mongoose, 
 * debemos decirle a express que se conecte a mongodb por lo que necesitamos un modulo y 
 * tambien ssirva para modelar los datos  */

const mongoose = require('mongoose'); // Se requiere el módulo y se guarda en la constante

const URI = 'mongodb+srv://javiermetal2:q1iTXj2qbSrpGMxM@micluster.tukky1y.mongodb.net/?retryWrites=true&w=majority';// defino la direcion de la conexion de la bd en una constante

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))// se utiliza una promesa para obtener informacion de la BD, queremos saber si se conecta
    .catch(err => console.error(err));


module.exports = mongoose;// de esta manera la constante moogose me devuelve la coenxion