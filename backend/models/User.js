/** 
 * Requrmimos mongoose, lo utilizaremos para definir los esquemas de datos no para la conexion
 * y empiezo a modelar los datos de los empleados, como nombre, cargo u otra cosas
 * mogoose le dice a mongodb como va a lucir la estrucura de empleados
 */

const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    name: {type:String, require:true},
    username: {type:String, require:true},
    password: {type:String, require:true},
    updatedAt: {type:Date, require:false, default: Date.now}
});

module.exports = mongoose.model('User', UserSchema);// Como voy a utilizar este archivo en otras partes de la aplicacion