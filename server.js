var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');

var app = express();
var port = 3000;

var compiler = webpack(config);

app.use(favicon(path.join(__dirname + '/favicon.ico')));

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.get("/", function(req, res){
	res.sendFile(__dirname + '/app/home/index.html');
});

app.get("/admin", function(req, res){
	res.sendFile(__dirname + '/app/admin/index.html');
});

app.get("*", function(req, res){
	res.sendFile(__dirname + '/app/admin/index.html');
});



app.get("*", function(req, res){
	res.sendFile(__dirname + '/app/admin/index.html');
});

app.listen(port, function(error){
	if(error){
		console.error(error);
	}else{
		console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
	}
})