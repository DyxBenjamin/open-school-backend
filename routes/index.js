var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/status', function(req, res, next) {
  res.status(200).json({
    status: 'OK',
    message: 'Everything is fine',
    version: '1.0.0',
    timestamp: new Date()
  });
});

module.exports = router;
