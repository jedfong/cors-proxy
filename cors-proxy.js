'use strict';

var express = require('express');
var request = require('request');
var argv = require('yargs').argv;

var port = argv.port || 3001;
var origin = argv.origin || 'http://localhost:3000';
var app = express();

app.use('/', function(req, res) {
    var urlParts = req.originalUrl.split('url=');
    var url;

    if (urlParts.length === 2 && urlParts[1].length > 0) {
        url = urlParts[1];
        console.log('%s - Proxying Request [%s]', new Date().toString(), url);
        res.setHeader('Access-Control-Allow-Origin', origin);

        req.pipe(request({
            url: url,
            strictSSL: false
        })).pipe(res);
    } else {
        res.status(404).send('Not found');
    }
});

app.listen(port);
console.log('Now proxying on port [%s]', port);

process.on('uncaughtException', function (err) {
    console.log(err);
});
