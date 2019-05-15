'use strict';
// =========================================================================
// ===============Include routes files==============//


require('./config/dbConnection');
const system = require('./systems');
global.controllers = system.controllers;
global.models = system.models;
global.callbacks = system.callbacks;

app.use(require('./routes/api-v1'));
// =========================================================================
