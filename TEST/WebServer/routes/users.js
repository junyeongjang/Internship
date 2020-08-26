var express = require('express');
var router = express.Router();
const axios = require('axios');
/* GET users listing. */
router.get('/', function(req, res, next) {
	axios({
            method: 'get',
            url: 'http://localhost:5000',
            data: {
            request: req.headers,
            url : req.baseUrl,
           }
      });

  res.send('respond with a resource');
});

module.exports = router;
