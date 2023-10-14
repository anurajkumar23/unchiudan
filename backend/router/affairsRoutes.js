const express = require('express');
const affairsController = require('../controllers/affairsController');
const { protect, restrictTo,authenticateCors } = require('../controllers/authController');
const { uploadPhoto, resizePhoto } = require('../controllers/newsController');

const router = express.Router();

router
  .route('/')
  .get(affairsController.getAllAffairs)
  .post(
    authenticateCors,
    // protect,
    restrictTo('admin'),
    uploadPhoto,
    resizePhoto('public/img/affairs'),
    affairsController.createAffairs,
  );

router.get('/images/:imageName',affairsController.showimage)

router.get('/lastestAffairs', affairsController.lastestAffairs);
router.get('/dailyquiz',affairsController.newest)

router
  .route('/:id')
  .get(affairsController.getAffair)
  .delete(authenticateCors, restrictTo('admin'), affairsController.deleteAffair)
  .patch(
    authenticateCors,
    // protect,
    restrictTo('admin'),
    uploadPhoto,
    resizePhoto('public/img/affairs'),
    affairsController.updateOne,
  );

module.exports = router;
