'use strict';
const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

const PORT = "3000";
const hostName = "http://localhost";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('x-powered-by', false);

app.use(function(req, res, next) {
    console.log('Time:', Date.now())
    next()
});

let apiRoutes = require('./app/routes/api')(app, express);
app.use(apiRoutes);



app.listen(PORT, () => {
    console.log(`Server running on ${hostName}:${PORT}`);
});