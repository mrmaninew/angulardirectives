const express = require('express'),
    bodyParser = require('body-parser'),
    hbs = require('hbs'),
    path = require('path'),
    routes = require('./routes/routes'),
    app = express();



app.set('views', path.join(__dirname, '/views'));
app.use('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '/client')));


app.get('/', (req, res) => {
    res.render('about.hbs');
});

app.listen(3000, () => {
    console.log("Server running on 3000");
});