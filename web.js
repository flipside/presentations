'use strict';
var express = require('express');
var app = express();
var PORT = process.env.PORT || 5000;

app.use('/', express.static(__dirname));
app.listen(PORT, function() {
  console.log('Presentation server started on ' + PORT);
});
