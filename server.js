var express = require('express');

//create our app
var app = express();
const PORT = process.env.PORT || 3000;
app.use(function(req, res, next){
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url)
  }

})

//tell it which folder to serve
//app.use lets you add functionality to express app
//call express.static
//express.static is going to specify a folder name that we want to expose to the web server
app.use(express.static('public'));

//start the server
//app.listen takes two arguments - the port and a function which will get called once the server is up
app.listen(port, function(){
  console.log('Express server is up on port ' + PORT);
})
