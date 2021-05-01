var express = require('express');
var app = express();
/*TODO:
styling paths
test on github 
see how to upload to github properly
if all data is not entered show error
*/
app.use(express.static('public'));
app.use(express.urlencoded());

app.post('/registrar', (req, res) => {
    var html = `<html>
    <head>
    <title>Registracion Completada</title>
    <link rel="stylesheet" href="./style/response.css">
    </head>
    <body>
    <h1>Registracion exitosa</h1>
    <h1>Datos</h1><br/>
    <h1>Nombre:</h1><p>${req.body.nombre}</p>
    <h1>Apellido:</h1><p>${req.body.apellido}</p>
    <h1>Edad:</h1><p>${req.body.edad} Años</p>
    <h1>Numero de celular:</h1><p>${req.body.numero_celular}</p>
    <h1>Pais de nacimiento:</h1><p>${req.body.pais_nacimiento}</p>
    <h1>Pais de residencia:</h1><p>${req.body.pais_residencia}</p>
    <a href="./index.html">Volver a registrarse</a><br/>
   
    </body>
    </html>`
    res.send(html);
})

app.listen(3000, function () {
    console.log('listening on port 3000');
})