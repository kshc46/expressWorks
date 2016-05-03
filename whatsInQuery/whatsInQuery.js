var express = require('express');
var app = express();
var querystring = require('querystring');
var url = require('url');

app.get('/search', function(req, res){
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    res.send(query);
});

app.listen(process.argv[2]);

/* Solution

    var express = require('express')
    var app = express()
    
    app.get('/search', function(req, res){
      var query = req.query
      res.send(query)
    })
    
    app.listen(process.argv[2])
    
*/