const express = require('express');
const { createOrder , addPdfInUsers } = require('../controllers/paymentController')



const router = express.Router();


router.post('/createOrderId', createOrder);
router.get(
  '/NR&t#6@43p2*zs!SFvX5&Up5%&T8@ft/unchiudan/pdf/:userId/:pdfId',
  addPdfInUsers,
);



module.exports = router;