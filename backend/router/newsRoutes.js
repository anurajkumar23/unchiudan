const express = require('express');
const newsController = require('./../controllers/newsController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(newsController.getAllNews)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    newsController.uploadNewsPhoto,
    newsController.resizeUserPhoto,
    newsController.createOne,
  );

router
  .route('/:id')
  .get(newsController.getNews)
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    newsController.deleteNews,
  )
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    newsController.uploadNewsPhoto,
    newsController.resizeUserPhoto,
    newsController.updateOne,
  );

module.exports = router;
