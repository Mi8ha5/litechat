var express= require ("express");
var app = express();
var router = express.Router();
var fs = require ("fs");
var path = require ('path');
var bodyParser = require ('body-parser');
app.use(bodyParser.json());
app.use(express.static(path.join(process.cwd()) + '/static'));
app.get("/static/:filename", function (req,res){
  res.sendFile(path.join(process.cwd(), "/static/index.html"));
});
app.post("/chat", function (req,res){
  console.log(req.body);
  var obj=req.body;
  res.send(req.body);
});
app.listen(8080);
