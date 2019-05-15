//===========Include node plugin in app js =============//
const express = require('express');
const path = require('path');
const http = require('http');
var engine 		= require('ejs-locals');
var bodyParser = require('body-parser');
var cors = require('cors');
require('dotenv').config()
// =======Create the app variables for this app js=======//
app = express();
// =============Create the app output port===============//
app.set('port', process.env.PORT || 5030);
// ===define public folder name for this app============//
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', __dirname + '/app/views');
app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));
app.use(bodyParser.json({limit: '100mb'}));
// ========================================================================
// =====include site Controllers file====================//
var corsOptions = {
    origin: "*",
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'x-reset-token', 'x-invite-token','x-access-token','_token', 'x-api-key', 'x-www-form-urlencoded'],
    credentials: false
};
app.use(cors(corsOptions));
require('./app/includes');



// ========================================================================
// ===============create the node server=================//
const server = http.createServer(app);

server.listen(process.env.PORT || app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
});
// ===============reload the node server=================//
// reload(server, app);
// ========================================================================
