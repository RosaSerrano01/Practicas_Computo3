var express = require('express');
var router = express.Router();
const data=require('../userData');
const methods=require('../methods');
const { render } = require('../app');

//constantes para rutas de paginas login y register
const loginPage="../views/page/login";
const registerPage="../views/page/register";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//registro de rutas
router.get('home',(req, res)=>{
  res.render('home');
});
router.get('login',(req, res)=>{
  res.render(loginPage);
});

router.get('register',(req, res)=>{
  res.render(registerPage);
});

router.post('/register', (req,res)=>{
  const {fullName, email,password, confirmPassword}=req.body;

  //validacion

  if (password ===confirmPassword){
    //Validar si el correo estaregistrado
    if (data.data.find(u => u.email===email)){
      res.render(registerPage,{
        message:"El usuario ya esta registrado",
        messageClass:"alert-danger"
      });
    }

    //encriptar el password
    const PHash=methods.getHashedPassword(password);
    //almacenar los datos
    data.data.push({
    fullName,
    email,
    paswword:PHash
  });

  res.render(loginPage,{
    message:"Registro Exitoso.Inicie sesion",
    messageClass:"alert-success"
  });

  }else{
    res.render(registerPage,{
      message:"Las contraseñas no coinciden",
      messageClass:"alert-danger"
    });
  }
})

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = methods.getHashedPassword(password);
  
  //validar que los datos coincidan
  const dataUser = users.data.find(u => {
    return u.email === email && hashedPassword === u.password;
  });

  if(dataUser) {
    const authToken = methods.generateToken();
    //almacenar token de autenticacion
    methods.authTokens[authToken] = dataUser;
    res.cookie('AuthToken', authToken);
    res.redirect('/home');
  } else {
    res.render(loginPage, {
      message: "El usuario o clave no coinciden",
      messageClass: "alert-danger"
    });
  }
});

module.exports = router;
