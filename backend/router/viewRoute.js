const express = require('express');
const viewController = require('../controllers/viewController.js');
const authController = require('../controllers/authController.js');

const router = express.Router();

router.use(viewController.alerts);

router.get('/me', authController.protect, viewController.getAccount);