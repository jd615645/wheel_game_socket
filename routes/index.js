var express = require('express');
var router = express.Router();
var io = require('socket.io')();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/btn', function(req, res, next) {
  res.render('startBtn');
});

module.exports = router;
