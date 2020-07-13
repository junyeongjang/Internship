const express = require('express');
const fs = require('fs');
const router = express.Router();
/* GET users listing. */
function SplitLogic(dataSplit, length){
    const dataArray = dataSplit.split(" ");
    console.log(dataArray);
}


router.get('/', function(req, res, next) {
    const data = fs.readFileSync('./logs/WebLog_20200713.log','utf-8'); //data 타입은 string
   // console.log(typeof(data));
    const dataSplit = data.split('\n');
    console.log(dataSplit.length);
    SplitLogic(dataSplit[1], dataSplit[1].length);
    res.render('item',{item_name: "hi"});
});

module.exports = router;
