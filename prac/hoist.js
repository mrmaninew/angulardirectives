'use strict';

const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    app = express();

app.set('PORT', 3000);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/client/index.html');
});


let apiRouter = require('./app/routes/api')(app, express);
app.use(apiRouter);

app.listen(app.get('PORT'), () => {
    console.log('Server on port' + app.get('PORT'))
});