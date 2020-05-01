const express = require('express')
const bodyParser = require('body-parser')

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
})
    .get((req, res, next) => {
        res.end("Contains all dishes");
})
    .post((req, res, next) => {
        res.end("Name: " + req.body.name + "Description: " + req.body.description);
})
    .put((req, res, next) => {
        res.end("Operation not supported");
})
    .delete((req, res, next) => {
        res.statusCode = 403;
        res.end("deleting all dishes");
});

dishRouter.route('/:dishId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end("Contains all details of the dishes Id: " + req.params.dishId);
})
    .post((req, res, next) => {
        res.end("POST operation not supported on dishId's: " + req.params.dishId);
})
    .put((req, res, next) => {
        res.write("Updating the dishes" + "\n");
        res.end("Updating the dishes named: " + req.body.name + 'Details: ' + req.body.description);
})
    .delete((req, res, next) => {
        res.end("deleting dish with dishId: " + req.params.dishId);
})

module.exports = dishRouter;