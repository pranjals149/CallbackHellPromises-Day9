const express = require('express'),
      bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
})
    .get((req, res, next) => {
        res.end("Contains names of all Promos");
})
    .post((req, res, next) => {
        res.end("Name: " + req.body.name + "Description: " + req.body.description);
})
    .put((req, res, next) => {
        res.end("Operation not supported");
})
    .delete((req, res, next) => {
        res.statusCode = 403;
        res.end("deleting names of all Promos");
});

promoRouter.route('/:promoId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
})
    .get((req, res, next) => {
        res.end("Contains all details of the Promo Id's: " + req.params.dishId);
})
    .post((req, res, next) => {
        res.end("POST operation not supported on PromoId's: " + req.params.dishId);
})
    .put((req, res, next) => {
        res.write("Updating the names of Promo" + "\n");
        res.end("Updating the Promotion named: " + req.body.name + 'Details: ' + req.body.description);
})
    .delete((req, res, next) => {
        res.end("deleting name of the Promotion with promoId: " + req.params.dishId);
})

module.exports = promoRouter;