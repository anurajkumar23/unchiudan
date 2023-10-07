const express = require('express');
const { createOrder , addPdfInUsers } = require('../controllers/paymentController')



const router = express.Router();


router.post('/createOrderId', createOrder,addPdfInUsers);
// router.get('/addPdf/:userId/:pdfId', addPdfInUsers);



module.exports = router;