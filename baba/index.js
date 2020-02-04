var express = require('express');
var app = express();
var logger = require('morgan');
var expressku = require('./routes/expressku');

app.set('port', process.env.port || 3000);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.send('server is running on port ' + app.get('port'));
});

app.get('/express', expressku.index);

app.listen(app.get('port'), function() {
    console.log('server is running on port ' + app.get('port'));
}); 
