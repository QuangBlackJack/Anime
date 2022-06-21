const express = require('express');
const router = express.Router();

const cartController = require('../app/controllers/CartController');

router.get('/', cartController.detail);
router.get('/add', cartController.add);
router.get('/delete/:_id', cartController.delete);
router.get('/delete-all', cartController.deleteAll);

module.exports = router;