var express=require('express');
var path=require('path');
var app=express();

// static path definition
app.use(express.static(path.join(__dirname+'/public')))

// routes
app.get('/', function(req, res){
   res.sendFile(__dirname+"/layout/"+"home.html");
})

app.get('/signup', function(req, res){
   res.send("<div style=\" background-color: black; color: white; font-weight: 'bold'; font-size: 50px;\">Coming Soon...</div>");
})

app.get('/login', function(req, res){
   res.sendFile(__dirname+'/layout/'+"login.html");
})

app.get('/editor', function(req, res){
   
      res.sendFile(__dirname+'/layout/'+'editor.html');
})



var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)

})