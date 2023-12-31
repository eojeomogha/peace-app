var express = require('express');
var router = express.Router();

const peacesCtrl = require('../controllers/peaces');

router.get('/', peacesCtrl.home);
router.get('/reports', peacesCtrl.report);
router.get('/all', peacesCtrl.index);
router.get('/new', peacesCtrl.new);
router.get('/edit/:id', peacesCtrl.edit);
router.get('/:id', peacesCtrl.show);
router.post('/all', peacesCtrl.create);
router.put('/:id', peacesCtrl.update);
router.delete('/:id', peacesCtrl.delete);
router.post('/:id/lickback', peacesCtrl.lickback); 

module.exports = router;
