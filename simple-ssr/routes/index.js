var express = require('express');
const {renderToString} = require('vue/server-renderer');
require("../public/commons/index");

var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
    const content = await renderToString(global.simpleSsr.createApp());
    res.render('index', {title: 'Express', content});
});

module.exports = router;
