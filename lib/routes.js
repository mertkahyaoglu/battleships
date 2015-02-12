'use strict';
var router = require('express').Router();

router.use(function(req, res, next) {
  next();
});

// default route
router.get('/', function(req, res) {
  res.render('public/index.html');
});

module.exports.router = router;
