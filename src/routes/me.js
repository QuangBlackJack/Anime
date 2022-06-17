const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/meController');

router.get('/store/movie', meController.storeMovie);


module.exports = router;


