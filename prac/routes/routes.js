'use strict';
const express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
    res.render('about.hbs');
});

module.exports = router;