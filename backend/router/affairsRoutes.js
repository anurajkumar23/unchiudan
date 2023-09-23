const express = require('express');
const affairsController = require('../controllers/affairsController');
const { protect, restrictTo } = require('../controllers/authController');
const { uploadPhoto, resizePhoto } = require('../controllers/newsController');

const router = express.Router();

router
  .route('/')
  .get(affairsController.getAllAffairs)
  .post(
    // protect,
    // restrictTo('admin'),
    uploadPhoto,
    resizePhoto('public/img/affairs'),
    affairsController.createAffairs,
  );

  

router.get('/lastestAffairs', affairsController.lastestAffairs);

router
  .route('/:id')
  .get(affairsController.getAffair)
  .delete(protect, restrictTo('admin'), affairsController.deleteAffair)
  .patch(
    protect,
    restrictTo('admin'),
    uploadPhoto,
    resizePhoto('public/img/affairs'),
    affairsController.updateOne,
  );

module.exports = router;
