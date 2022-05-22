const express =require('express');

var app=express();

//definir motor de plantillas a utilizar
app.set('view engine', 'jade');

app.get('/',function(req,res){
    res.render('index',
    {title:"Programacion Computacional IV",message:"Express con jade"}
    );
});

app.route('/test').get(function(req,res){
    res.send("Test page");
});

app.route('/practica').get(function(req,res){
    res.send("Hola, Soy Rosa :)");
});


const server = app.listen(3000);