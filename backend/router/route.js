const express = require("express");
const router = express.Router();
const { test } = require('../controllers/appController');


router.get('/', test);




module.exports = { router };
