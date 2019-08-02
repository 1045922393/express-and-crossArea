const express = require('express');
const app = express();
app.listen(7070, '127.0.0.1', function () {
    console.log('http://127.0.0.1:7070/');
})
app.get('/crossarea', (req, res) => {
    let fn = req.query.fn;
    // console.log(fn)
    let arr = [{ id: 1, name: '小姨' }, { id: 2, name: '小叔' }, { id: 3, name: "官人" }, { id: 4, name: "小蜜" }]
    res.send(`${fn}(${JSON.stringify(arr)})`)
})
app.use('/links', express.static('links'));