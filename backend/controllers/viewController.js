exports.alerts = (req, res, next) => {
    const { alert } = req.query;
    if (alert === 'booking')
      res.locals.alert =
        "Your payment was successful!.";
    next();
  };

  exports.getAccount = async (req, res) => {
    res.status(200).render('user', {
      title: 'Your account'
    });
  };


