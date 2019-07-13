var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'โคตรโง่' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'โคตรโง่' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'โคตรโง่' });
});

module.exports = router;
