var express = require('express');
var app = express();

app.get('/', function (req,res) {
    res.send('Hello world!');
});

app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
});

// Express looks up the files relative to the static directory, so the name of the static directory is not part of the URL.
app.use(express.static('static'));