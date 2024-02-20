const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
app.use('/fotolar', express.static(__dirname + "/fotolar"));
app.use('/public', express.static(__dirname + "/public"));

const port = 8080;
app.use(bodyParser.urlencoded({ extended: true }));

const users = [ ];

// Ana sayfa
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Giriş işlemi

app.post('/login', (req, res) => {
  const { name, lastname, email, password, nick } = req.body;

  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    res.redirect('/index');
  } else{
    res.send('Hatalı giriş.')
  }
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
  });
  
  // Kullanıcı kaydı
  app.post('/register', (req, res) => {
    const {name, lastname, email, password, nick} = req.body;
  
   
    
  
    // Yeni kullanıcıyı kaydet
    try{
      users.push({
          name: req.body.name,
          lastname: req.body.lastname,
          email: req.body.email,
          password: req.body.password,
          nick: req.body.nick
      })
      console.log(users); 
      
      res.redirect("/login")
          } catch (e){
              console.log(e);
              res.redirect("/register")
          }
      })
      
      
  


// Anasayfa
app.get('/index', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});


app.get('/login', (req, res)=>{
    res.sendFile(__dirname + '/views/login.html')
})

app.get('/register', (req,res)=> {
    res.sendFile(__dirname + "/views/register.html")
})

app.get('/index', (req, res)=>{
    res.sendFile( __dirname + "/views/index.html")
})

app.get('/comm', (req, res)=>{
    res.sendFile( __dirname + "/views/comm.html")
})


app.listen(8080)


