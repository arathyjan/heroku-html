var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, res) {
    fs.readFile('home.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
});

var port = process.env.PORT || 3000;
server.listen(port);

console.log("Server running at http://localhost:%d", port);