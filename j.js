var fs = require('fs');
var rest = require('restler');

console.log(fs.readFileSync('index.html').toString());
console.log("Now for the http\n\n\n");
rest.get("http://obscure-headland-5095.herokuapp.com/").on('complete', function(result, response) {
	console.log(result);
});

