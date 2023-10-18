const express = require('express');
const userController = require('../controllers/userController.js');
const authController = require('../controllers/authController.js');


const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.get('/authenticated', authController.isLoggedIn);

router.post('/forgotPassword', authController.forgotPassword);

router.patch('/resetPassword/:token', authController.resetPassword);

router.patch(
  '/updateMyPassword',
  authController.authenticateCors,
  authController.updatePassword,
);
router.patch('/updateMe', authController.authenticateCors, userController.updateMe);
router.delete('/deleteMe', authController.protect, userController.deleteMe);

router
  .route('/')
  .get(
    authController.authenticateCors,
    authController.restrictTo('admin'),
    userController.getAllUsers,
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    userController.deleteUser,
  );

module.exports = router;
