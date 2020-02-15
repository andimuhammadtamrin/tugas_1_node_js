// filename: index.js

// import Express
let express = require('express');

//import routes
let apiRoutes = require("./DataSiswa");

//initialize app
let app = express();

//setup server
var port = process.env.PORT || 8080;

//send message for default URL
app.get('/',(req,res)=> res.send('Selamat Datang Di Data Center Siswa Indonesia'));

//app
app.use('/DataSiswa',apiRoutes);

//Launch app to listen specified port
app.listen(port,function(){
  console.log("Running Resthub on " + port);
})
