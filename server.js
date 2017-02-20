var express= require ("express");
var app = express();
var router = express.Router();
var fs = require ("fs");
var path = require ('path');
var bodyParser = require ('body-parser');
var messages = new Array();
app.use(bodyParser.json());
app.use(express.static(path.join(process.cwd()) + '/static'));
app.get("/static/:filename", function (req,res){
  res.sendFile(path.join(process.cwd(), "/static/index.html"));
});
app.post("/chat", function (req,res){
  console.log(req.body);
  messages.push(req.body);
  console.log(messages);
  res.send(messages);
});
app.get("/load", function (req,res){
  console.log(req.body);
  res.send(messages);
});
app.listen(8080);
