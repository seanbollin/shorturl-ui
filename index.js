var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

app.use(express.static('public'));
app.use(bodyParser.json()); // for parsing application/json

app.post('/shorturl', function (req, res) {
	request({
	    url: 'http://localhost:8081/shorturl/', //URL to hit
	    method: 'POST',
	    headers: {
	        'Content-Type': 'application/json'
	    },
			json: {
				url: req.body.url
			}
	}, function(error, response, body){
	    if(error) {
	        console.log(error);
					res.send(error);
	    } else {
        	console.log(response.statusCode, body);
					res.send(body);
	    }
	});
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('ShortURL UI listening at http://%s:%s', host, port);

});