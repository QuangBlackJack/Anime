const express = require('express');
const router = express.Router();

const watchController = require('../app/controllers/watchController');

router.get('/update/:_id', watchController.update);
router.get('/delete/:_id', watchController.delete);
router.get('/edit/:_id', watchController.edit);
router.get('/manage', watchController.manage);
router.get('/store', watchController.store);
router.get('/:slug', watchController.show);
router.get('/', watchController.show);

module.exports = router;
