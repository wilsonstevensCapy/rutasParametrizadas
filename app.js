let express = require('express');
let rutasProductos = require('./routes/productos.js'); 
let rutasMain = require('./routes/main.js');


let app = express();



app.listen(3000, () => console.log('Esto fue exitoso'));

app.use('/productos', rutasProductos);
app.use('/', rutasMain);


