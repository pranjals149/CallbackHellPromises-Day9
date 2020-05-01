const express = require('express'),
    bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
})
    .get((req, res, next) => {
        res.end("Contains names of all leaders");
})
    .post((req, res, next) => {
        res.end("Name: " + req.body.name + "Description: " + req.body.description);
})
    .put((req, res, next) => {
        res.end("Operation not supported");
})
    .delete((req, res, next) => {
        res.statusCode = 403;
        res.end("deleting names of all leaders");
});

leaderRouter.route('/:leaderId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end("Contains all details of the leader Id's: " + req.params.dishId);
})
    .post((req, res, next) => {
        res.end("POST operation not supported on leaderId's: " + req.params.dishId);
})
    .put((req, res, next) => {
        res.write("Updating the names of leaders" + "\n");
        res.end("Updating the leader named: " + req.body.name + 'Details: ' + req.body.description);
})
    .delete((req, res, next) => {
        res.end("deleting name of the leader with leaderId: " + req.params.dishId);
})

module.exports = leaderRouter;