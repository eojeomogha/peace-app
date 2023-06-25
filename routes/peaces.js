var express = require('express');
var router = express.Router();

const peacesCtrl = require('../controllers/peaces');

router.get('/', peacesCtrl.index);
router.get('/new', peacesCtrl.new);
router.get('/edit/:id', peacesCtrl.edit);
router.get('/:id', peacesCtrl.show);
router.post('/', peacesCtrl.create);
router.put('/:id', peacesCtrl.update);
router.delete('/:id', peacesCtrl.delete);

module.exports = router;
