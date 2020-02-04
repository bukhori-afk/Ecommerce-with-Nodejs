var express = require('express');
var app = express();
var logger = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');


var expressku = require('./routes/expressku');
var adminku = require('./routes/adminku');

var conn = require('express-myconnection');
var mysql = require('mysql');

app.set('port', process.env.port || 3000);
app.set('view engine', 'ejs');

app.use(logger('dev'));
//app.use('/public' , express.static(__dirname + '/public'));
app.use('/public', express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({extended:false}));


app.use(
    conn(mysql, {
        host:'localhost',
        user: 'root',
        password:"",
        database:'ecommerce'
    }, 'single')
);

app.use(
    session({
        secret: 'babastudio',
        resave:false,
        saveUninitialized:true,
        cookie: { maxAge:120000}
    })
);



app.get('/', expressku.index);
app.get('/register', expressku.register);
app.get('/login_user', expressku.login_user);
app.get('/express/news_detail/:id_news', expressku.news_detail);
app.get('/express/single/:id_product', expressku.single);
app.get('/express/services', expressku.services);
// app.get('/express/login_user', expressku.login_user);
// app.get('/express/register' expressku.register);

app.get('/express/admin', adminku.home);
app.get('/express/admin/login', adminku.login);
app.get('/express/admin/home', adminku.home);

app.get('/express/admin/data_user', adminku.data_user);
app.get('/express/admin/add_user', adminku.add_user);
app.post('/express/admin/add_user', adminku.add_userproses);

app.get('/express/admin/data_brand', adminku.data_brand);
app.get('/express/admin/add_brand', adminku.add_brand);
app.post('/express/admin/add_brand', adminku.add_brandproses);
app.get('/express/admin/edit_brand/:id_brand', adminku.edit_brand);
//app.post('/express/admin/edit_brandproses/:id_brand', adminku.edit_brandproses);

app.get('/express/admin/data_produk', adminku.data_produk);
app.get('/express/admin/add_produk', adminku.add_produk);
app.post('/express/admin/add_produk', adminku.add_produkproses);
app.get('/express/admin/edit_produk/:id_product', adminku.edit_produk);
app.post('/express/admin/edit_produkproses/:id_product', adminku.edit_produkproses);
app.get('/express/admin/delete_produk/:id_product', adminku.delete_produk);

app.post('/express/admin/login', adminku.login);



app.listen(app.get('port'), function(){
    console.log('server is running on port ' + app.get('port'));

});

