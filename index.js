var express = require("express");
var mongoose = require("mongoose");
var app = express();

// 윈도우 환경변수 설정: $env:MONGO_DB="{데이터베이스 접속 URL}"
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true });

var db = mongoose.connection;
db.once("open", function(){
  console.log("DB connected");
});
db.on("error", function(err){
  console.log("DB ERROR : ", err);
});

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

var port = 3000;
app.listen(port, function(){
  console.log("Server Path: http://localhost:" + port);
});