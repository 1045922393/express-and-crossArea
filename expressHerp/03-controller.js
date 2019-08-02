const model = require('./04-model');
const url = require('url');
let controller = {
    getIndex(req, res) {
        model.readFile((arr) => {
            res.render('index', { arr });
        })
    },
    addView(req, res) {
        res.render('add', {});
    },
    addHero(req, res) {
        model.getMaxId((id) => {
            req.body.id = parseInt(id) + 1;
            let obj = req.body;
            model.readFile((arr) => {
                console.log(arr)
                arr.push(obj);      //push的返回值是什么
                model.writeFile(arr);
                res.send({ code: 200, msg: '添加成功' });
            })
        })
    },
    getEdit(req, res) {
        res.render('edit')
    },
    getCurrent(req, res) {
        let reqData = req.query;
        // console.log(target);
        model.readFile((arr) => {
            let target = arr.find((item) => {
                return item.id == reqData.id
            })
            // console.log(target)
            if (!target) {
                res.send({ code: 502, msg: '用户名不存在' });
                return;
            } else {
                res.send(target)
            }
        })
    },
    editHero(req, res) {
        let target = req.body;
        // console.log(target);
        // res.send(target)
        model.readFile((jsonArr) => {
            let changeIndex = jsonArr.findIndex(function (item) {
                return item.id == target.id
            });
            jsonArr[changeIndex] = target;
            // changeItem.id = target.id;
            // changeItem.img = target.img;
            // changeItem.name = target.name;
            // changeItem.gender = target.gender;
            model.writeFile(jsonArr);
            res.send({ code: 200, msg: '修改成功' })
        })
    },
    delHero(req, res) {
        let getData = url.parse(req.url, true).query;
        // res.send(getData);
        model.readFile((jsonArr) => {
            let delIndex = jsonArr.findIndex(function (item) {
                return item.id == getData.delId
            })
            jsonArr.splice(delIndex, 1);
            model.writeFile(jsonArr);
            res.send({ code: 200, msg: '删除成功' })
        })
    }
}
module.exports = controller;