const express = require('express');
const { createOrder } = require('../controllers/paymentController')
const { protect, restrictTo } = require('../controllers/authController');


const router = express.Router();


router.post('/createOrderId', createOrder);



module.exports = router;