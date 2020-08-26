const express = require('express');
const router = express.Router();
const split = require('../logic/splitLog');
const fs = require('fs');
/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  const logData = split.splitLog('./logs/webLogs/WebLog_20200713.log');
  console.log(logData);
});
module.exports = router;
 