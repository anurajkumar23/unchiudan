
const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();



router.get('/allUsers', adminController.getAllUser);
router.get('/user/:id', adminController.getSingle);
router.get('/allPdfs',adminController.getPdfs);
router.get('/pdf/:id',adminController.deletePdf);




module.exports = router;