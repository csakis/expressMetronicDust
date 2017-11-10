var express = require('express');
var router = express.Router();
var portletOptions = require("../views/mixins/portlet-defaults");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: "My Dust page"});
});

module.exports = router;
