const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
//configuring data
const data = require('./dataFolder/data');
const userArray = data.users;
//const location = data.users.adress;
//console.log(location.c);
//console.log(data.users);
app.use('/static',express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/',  (req, res) => {
  res.render('index', {dataUsers: userArray});
});

app.get('/user/:id', (req, res) =>{
  let userId = req.params.id;
  let targetId;
    userArray.forEach((robot) => {
      if (robot.id == userId) {
        targetId = robot;
      }

    });
  res.render('user', {model: targetId});
});

app.listen(3000, function () {
  //console.log('Successfully started express application!')
});
