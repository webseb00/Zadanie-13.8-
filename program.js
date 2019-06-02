var http = require('http');
var fs = require('fs');
var remoteImgPath = 'https://www.lifewire.com/thmb/tP-WiDIt-ihlQB7LF_RTHzTrjng=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/404-not-found-error-explained-2622936-Final-387df77f30dd4c9d805012c2ba13fbc5.png';
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
		response.write('<img src="' + remoteImgPath + '"/>');
		response.write('</body>');
		response.end();
	}
});

server.listen(9000);