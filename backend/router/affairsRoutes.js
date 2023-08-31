const express = require('express');
const affairsController = require('./../controllers/affairsController');
const { protect, restrictTo } = require('../controllers/authController');
const {uploadPhoto,resizePhoto} = require('../controllers/newsController')

const router = express.Router();

router.route('/').get(affairsController.getAllAffairs).post(
  protect,
  restrictTo('admin'),
  uploadPhoto,
  resizePhoto("public/img/affairs"),
  affairsController.createAffairs,
);

// router
//   .route('/:id')
//   .get(affairsController.getAffair)
//   .patch(affairsController.updateAffair)
//   .delete(affairsController.deleteAffair);

module.exports = router;
