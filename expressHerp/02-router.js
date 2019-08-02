const express = require('express');
const router = express.Router();
const controller = require('./03-controller')



router.get('/index.html', function (req, res) {
    controller.getIndex(req, res);
});
router.get('/add.html', function (req, res) {
    controller.addView(req, res);
});
router.post('/addHero', function (req, res) {
    controller.addHero(req, res);
});
router.get('/edit.html', function (req, res) {
    controller.getEdit(req, res);
    // res.render('edit', {});
});
router.get('/getCurrent', function (req, res) {
    controller.getCurrent(req, res);
});
router.post('/editHero', function (req, res) {
    controller.editHero(req, res);
})
router.get("/delHero", function (req, res) {
    controller.delHero(req, res);
})

module.exports = router;