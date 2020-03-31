var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var api = require('./server/routes/api');


var port = 9000;


var app = express();
app.use(express.static(path.join(__dirname, 'client/dist')));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', api);

app.get('*', (req, res, next) => {
    console.log(__dirname);
    // res.json("asdasd");
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));

});
// app.get('/', function(req, res) {
//     res.render(path.join(__dirname, 'dist/index.html'));
// })

app.use('/api', api);

app.listen(port, function() {

    console.log('Server started on port ' + port);
})