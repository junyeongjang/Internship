const express = require('express');
const fs = require('fs');
const router = express.Router();
/* GET users listing. */

//아직 에러처리 없음

function SplitDate(DateArray){//날짜 데이터 추출
    const Date = DateArray.replace('[','');
    console.log(Date);
    return Date;
}

function SplitIPAddress(IPArray){ //[ '{"message"', '"', '', 'ffff', '39.7.51.224' ]
//IP 주소의 데이터를 추출함
    const IPAddress = IPArray.split(':');
    return IPAddress[4];
}
function SplitLogic(dataSplit, length){ //문자열을 객체 배열로 바꿈
    const array =[];
    dataSplit.forEach(element => {
        if(element=='') return array;
        const dataArray = element.split(' ');
        const IP = SplitIPAddress(dataArray[0]);
        const Date = dataArray[3].replace('[','');
        const Site = dataArray[6];
        const Device = dataArray[13];
        array.push({IPAddress: IP, Date: Date, Site: Site, Device: Device});
    });
    console.log(array);
    return array;
}
function writeFile(data,path){ //객체를 JSON으로 바꿔줌
    try {
        fs.writeFileSync(path, JSON.stringify(data));
      } catch (err) {
        console.error(err);
      }
}

async function toJSON(fileName){
    const data = fs.readFileSync(fileName,'utf-8'); //파일 읽어옴 -> data 타입은 string
    const dataSplit = data.split('\n');
    const ObjectArray = await SplitLogic(dataSplit, dataSplit.length);
    writeFile(ObjectArray, './json/myFile.json');
}


router.get('/', function(req, res, next) {
    //const data = fs.readFileSync('./logs/WebLog_20200713.log','utf-8'); //data 타입은 string
    toJSON('./logs/WebLog_20200713.log'); // log 파일을 입력하면 -> json으로 변경
    res.render('item',{ item_name: "hi" });
});


module.exports = router;
