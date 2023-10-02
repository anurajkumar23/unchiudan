const express = require('express');
const { createOrder , addPdfInUsers } = require('../controllers/paymentController')
const { protect, restrictTo } = require('../controllers/authController');


const router = express.Router();


router.post('/createOrderId', createOrder);
router.get('/addPdf/:userId/:pdfId', addPdfInUsers);
// router.post('/addPdf/:userId/:pdfId', addPdfInUsers);




module.exports = router;