const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/meController');

router.get('/store/movie', meController.storeMovie);
router.get('/store/product', meController.storeProduct);


module.exports = router;


