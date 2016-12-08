'use strict';

module.exports = function(app, express) {
    var router = express.Router();

    // router endpoints 
    router.route('/post')
        .get(logger, (req, res) => {
            res.send("all posts");
        })
        .post((req, res) => {
            console.log(req.body);
            res.send(req.body);
        });

    function logger(req, res, next) {
        console.log("loggged");
        next()
    };

    return router;
};