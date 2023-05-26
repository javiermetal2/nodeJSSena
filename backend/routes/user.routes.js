/**
 * Vamos a crear rutas del servidor
 * creamos un módulo por eso utilizamos express
 * vamos a utilizar como nuestra rest api para enviar y recibir datros en formato json
 */

const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller');


router.get('/', userCtrl.getUsers ); // Aqui tenemos una ruta más limpia de entender gracias al controlador. obtiene todos los usuarios
router.post('/', userCtrl.createUser );//guardar usuarios
router.get('/:id', userCtrl.getUserById );// obtiene unn unico usuario
router.put('/:id',userCtrl.userEdit );   //Acctualizar datos (uno a la vez)
router.delete('/:id', userCtrl.deleteUser );

module.exports = router;