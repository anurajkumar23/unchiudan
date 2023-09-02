const express = require('express');
const pdfController = require('../controllers/pdfContoller');
const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router();

router.route('/').get(pdfController.getAllPdf).post(
  protect,
  // restrictTo("admin"),
  pdfController.uploadPhotoAndPdf,
  pdfController.createPdf,
);

router
  .route('/:id')
  .get(pdfController.getPdf)
  .delete(
    protect,
    // restrictTo('admin'),
    pdfController.deletePdf,
  )
  .patch(
    protect,
    restrictTo('admin'),
    pdfController.uploadPhotoAndPdf,
    pdfController.updateOne,
  );


  router.route("/download-pdf/:id").get(protect,pdfController.download)

module.exports = router;
