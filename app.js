let express = require('express');

let app = express();

app.listen(3000, () => console.log('Esto fue exitoso'));

app.get('/', function (req, res) {
    res.send('Bienvenidos al sitio!!!');
});
app.get('/contacto', function (req, res) {
    res.send('Dejanos tu contacto!');
});
app.get('/productos/:idProducto', function (req, res) {
    res.send("Bienvenidos al detalle del producto " + req.params.idProducto);
});
app.get('/productos/:idProducto/comentarios/:idComentario?', function (req, res) {
    if (req.params.idComentario == undefined){
        res.send("Bienvenidos a los comentarios del producto " + req.params.idProducto );
    }else{
        res.send("Bienvenidos a los comentarios del producto " + req.params.idProducto +
        " y estas enfocado en el comentario" +
        req.params.idComentario  ); 
    }
    
})