var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.urlencoded());

app.post('/registrar', (req, res) => {
    var html = `<html>
    <head>
    <title>Registro Completado</title>
    <link rel="stylesheet" href="./style/response.css">
    
    <style>
@import url('https://fonts.googleapis.com/css2?family=Antonio:wght@300&display=swap');

h1,p,a,#link{
    font-family: 'Antonio',sans-serif;
    text-align: center;
    text-decoration: none;

}

a{
  font-size:150%;
}

table,th,td{
    border:1px solid black;
}


table{
    width:100%;
}

a:hover{
    text-decoration: underline;
    color:blue;
}

body{
    background-color:#F2F8FD;
}

p{
    font-size: 300%;
}
    </style>
    </head>
    <body>
    <h1>Registro exitoso</h1>
    <h1>Datos</h1><br/>
    <table>
    <tr>
    <th>
    <h1>Nombre</h1>
    </th>
    <td>
    <p>${req.body.nombre}</p>
    <td/>
    </tr>
    <tr>
    <th>
    <h1>Apellido</h1>
    </th>
    <td>
    <p>${req.body.apellido}</p>
    <td/>
    </tr>
    <tr>
    <th>
    <h1>Edad</h1>
    </th>
    <td>
    <p>${req.body.edad}</p>
    <td/>
    </tr>
    <tr>
    <th>
    <h1>Numero de celular<h1/>
    </th>
    <td>
    <p>${req.body.numero_celular}</p>
    <td/>
    </tr>
    <tr>
    <th>
    <h1>Pais de nacimiento</h1>
    </th>
    <td>
    <p>${req.body.pais_nacimiento}</p>
    <td/>
    </tr>
    <tr>
    <th>
    <h1>Pais de residencia:</h1>
    </th>
    <td>
    <p>${req.body.pais_residencia}</p>
    <td/>
    </tr>
    </table>
    <div id="link">
    <a href="./index.html">Volver a registrarse</a><br/>
   </div>
    </body>
    </html>`
    res.send(html);
})

app.listen(3000, function () {
    console.log('listening on port 3000');
})