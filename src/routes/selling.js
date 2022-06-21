const express = require('express');
const router = express.Router();

const sellingController = require('../app/controllers/sellingController');

router.get('/', sellingController.index);
router.get('/adding-product', sellingController.add);
router.get('/added-product', sellingController.added);
router.get('/update/:_id', sellingController.edit);
router.get('/change/:_id', sellingController.update);
router.get('/delete/:_id', sellingController.delete);
router.get('/detail/:_id', sellingController.detail);

module.exports = router;
