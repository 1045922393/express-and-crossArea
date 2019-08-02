const fs = require('fs')
let model = {
    readFile(callback) {
        fs.readFile('./data/data.json', "utf-8", (err, content) => {
            if (err) console.log(err);
            let arr = JSON.parse(content);
            callback(arr);
        })
    },
    getMaxId(callback) {
        fs.readFile('./data/data.json', 'utf-8', (err, content) => {
            if (err) console.log(err);
            let arr = JSON.parse(content);
            let id = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].id > id) {
                    id = arr[i].id;
                }
            }
            callback(id);
        })
    },
    writeFile(jsonArr) {
        let jsonString = JSON.stringify(jsonArr);
        fs.writeFile('./data/data.json', jsonString, (err) => {
            if (err) console.log(err);
        })
    }
}
module.exports = model;