'use strict';
// ============================================================================
const express = require('express');
var router = express.Router();
const authMiddleware = require("../middlewares/auth");
// const prefix = '/api/' + process.env.API_VERSION + '/';
let controllers = global.controllers;
router.get('/', controllers.HomeController.index);
module.exports = router;
