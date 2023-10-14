const express = require('express');
const pdfController = require('../controllers/pdfContoller');
const { protect, restrictTo,authenticateCors } = require('../controllers/authController');

const router = express.Router();

router.route('/').get(pdfController.getAllPdf).post(
  authenticateCors,
  // protect,
  restrictTo("admin"),
  pdfController.uploadPhotoAndPdf,
  pdfController.createPdf,
);

router.get('/lastestPdfs', pdfController.lastestPdfs);

router
  .route('/:id')
  .get(pdfController.getPdf)
  .delete(
    authenticateCors,
    restrictTo('admin'),
    pdfController.deletePdf,
  )
  .patch(
    authenticateCors,
    // protect,
    restrictTo('admin'),
    pdfController.uploadPhotoAndPdf,
    pdfController.updateOne,
  );


  router.route("/download-pdf/:id").get(pdfController.download)

module.exports = router;
