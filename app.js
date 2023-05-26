// inicializamos el modulo express con el fin de dar inicio al servidor, evitando varias configuraciones
const express = require("express"); // llamar a express
const app = express(); // inicializar express
const mongoose = require("mongoose"); // llamar a mongoose
const bodyParser = require('body-parser'); // llamar a body parser
// llamar al body parser------------------------------------------
app.use(bodyParser.json()); // para que el body parser pueda leer json
// importamos las rutas ----------------------------------------------
const postRoutes = require("./routes/post"); 
// Middleware---------------------------------------------------------
app.use("/servicios", postRoutes); //
app.use("/servicios", () =>  {
  console.log("Middleware ejecutado"); 
}); 
// Rutas ---------------------------------------------------------
app.get("/", (req, res) =>  {//
res.send("Hola Mundo ¡¡¡¡¡"); 
}); 
 app.get("/servicios", (req, res) =>  {
      res.send("Prueba servicios ¡¡¡¡¡"); 
 }); 
// conexion a la DB ( base de datos ) -----------------------------------
// Prueba 1 -------------------------------------------------------------
mongoose.connect(
    "mongodb+srv://javiermetal2:U2xGWEQjBrodkdlD@cluster0.djoycg7.mongodb.net/?retryWrites=true&w=majority", 
     {
        useNewUrlParser:true, 
        useUnifiedTopology:true, 
    }
); 
const connection = mongoose.connection; 
connection.once("open", () =>  {
   console.log(
        "MongoDB database connection established successfully\n(conexión de base de datos establecida con exito)"
    ); 
}); 
app.listen(10000); 
