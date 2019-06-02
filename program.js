var http = require('http');
var fs = require('fs');
var imgPath = 'https://voidcoders.com/wp-content/uploads/2018/09/featured-404-error-image.png';
var server = http.createServer();

server.on('request', function(request, response) {
	response.setHeader('Content-Type', 'text/html; charset=utf-8');
	if(request.method === 'GET' && request.url === '/hello') {
		fs.readFile('./index.html', 'utf-8', function(err, data) {
			if (err) throw err;
			response.write(data);
			response.end();
		});
	} else {
		response.statusCode = 404;
		response.write('<body>');
		response.write('<img class="img-fluid" src="' + imgPath + '"/>');
		response.write('</body>');
		response.end();
	}
});

server.listen(9000);