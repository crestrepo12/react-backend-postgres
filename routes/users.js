var express = require('express');
var db = require('../db/queries')
var router = express.Router();

/* GET users listing. */
//calls the function and returns JSON
router.get('/', db.getAllUsers);

module.exports = router;
