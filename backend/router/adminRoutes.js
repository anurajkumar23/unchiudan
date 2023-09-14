
const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();



router.get('/allUsers', adminController.getAllUser);
router.get('/user/:id', adminController.getSingle);




module.exports = router;