const express = require('express');
const newsController = require('./../controllers/newsController');
const { protect, restrictTo,authenticateCors} = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(newsController.getAllNews)
  .post(
    authenticateCors,
    // protect,
    restrictTo('admin'),
    
    newsController.uploadPhoto,
    newsController.resizePhoto('public/img/news'),

    newsController.createOne,
  );

  // router.get('/images/:imageName', (req, res) => {
  //   const imageName = req.params.imageName;
  //   const imagePath = path.join(__dirname, '../public/img/news', imageName);
  //   res.sendFile(imagePath);
  // });

router
  .route('/autodelete')
  .delete(authenticateCors, restrictTo('admin'), newsController.autoDelete);

router
  .route('/:id')
  .get(newsController.getNews)
  .delete(authenticateCors, restrictTo('admin'), newsController.deleteNews)
  .patch(
    authenticateCors,
    restrictTo('admin'),
    newsController.uploadPhoto,
    newsController.resizePhoto('public/img/news'),
    newsController.updateOne,
  );

module.exports = router;
