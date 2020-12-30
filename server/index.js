"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var prod = process.env.NODE_ENV === 'production';
app.set('port', prod ? process.env.NODE_ENV : 3065);
app.get('/', function (req, res, next) {
    res.send('react nodebird 정상 동작!');
});
app.listen(app.get('port'), function () {
    console.log("server is running on " + app.get('port'));
});
