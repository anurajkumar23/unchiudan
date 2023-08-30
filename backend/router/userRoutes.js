const express = require('express');
const userController = require('../controllers/userController.js');
const authController = require('../controllers/authController.js');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.patch(
  '/updateMyPassword',
  authController.protect,
  authController.updatePassword,
);
router.delete('/deleteMe', authController.protect, userController.deleteMe);

router
  .route('/')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    userController.getAllUsers,
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    userController.deleteUser,
  );

module.exports = router;
