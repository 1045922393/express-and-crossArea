const express = require('express');
const app = express();
const router = require('./02-router');
const bodyparser = require('body-parser');

app.set('view engine', "ejs");
app.listen(8080, '127.0.0.1', function () {
    console.log('http://127.0.0.1:8080/');
})
app.use('/views', express.static('views'));
app.use('/links', express.static('links'));
app.use(bodyparser.urlencoded({ extended: false }));//引入中间件
app.use(router);