const PirateController = require('../controllers/pirate.controller');

module.exports = function(app){
    // test
    app.get('/api', PirateController.index);
    // create
    app.post('/api/pirates', PirateController.createPirate);
    // get all
    app.get('/api/pirates', PirateController.getAllPirates);
    // get one
    app.get('/api/pirates/:id', PirateController.getPirate);
    // delete
    app.delete('/api/pirates/:id', PirateController.deletePirate);
}