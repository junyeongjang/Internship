const express = require('express');
const axios = require('axios');
const router = express.Router();


router.get('/', function(req, res, next){
	
	console.log(req);	
	axios({
 		 method: 'get',
 		 url: 'http://localhost:5000',
  	     data: {
    		request: req.headers,
			url : req.baseUrl,
 		 }
	});
	res.send("hi");	
});


module.exports = router;
