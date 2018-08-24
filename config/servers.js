var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var http = require('http').createServer(app);
const prodEnv = require('./dev.env');
var db = require('./database');

app.set('port', prodEnv.PORT || 8081);
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//监听端口是否启动
http.listen(app.get('port'), function () {
console.log('server listening on port' + app.get('port'));
})
//实际使用
app.post('/api/login', function (req, res) {
    res.send(db.loginInfo);
})