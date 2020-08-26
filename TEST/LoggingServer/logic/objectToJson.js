/* 객체와 경로를 입력받아 JSON 파일을 생성 */ 
const fs = require('fs');

exports.objectToJson = (object, path) =>{ // path 어느 경로에 저장할 것인지
    fs.writeFileSync(path, JSON.stringify(object), function (err) {
        if (err) {
            console.log('에러발생');
            return;
        }
        console.log('JSON 파일 생성 완료'); 
       }
    );  
};
