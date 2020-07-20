var express = require('express');
var app = express();

app.get('/',function(req,res){
  res.send('Hola Mundo con express!');
});

app.listen(3000, function(){
  console.log('Aplicación ejemplo, escuchando en el puerto 3000!');

});
