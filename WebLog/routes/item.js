const express = require('express');
const router = express.Router();
const url = require('url');
/* GET home page. */
router.get('/', function(req, res, next) {
    const _url = req.url;
    const queryData = url.parse(_url,true).query;
    const inputData = queryData.item;
    //console.log(req.headers);
    console.log(req.url);
    //console.log(inputData);
    res.render("item" ,{item_name: inputData});
});

module.exports = router;
