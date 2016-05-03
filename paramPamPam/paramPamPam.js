var express = require('express');
var app = express();
var crypto = require('crypto');

app.put('/message/:id', function(req, res){
    var info = req.params.id;
    
    var newInfo = crypto.createHash('sha1')
    .update(new Date().toDateString() + info)
    .digest('hex');
    
    res.send(newInfo)
});

app.listen(process.argv[2]);