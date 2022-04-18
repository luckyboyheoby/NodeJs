var http = require('http');
    var fs = require('fs');
    http.createServer(function (req, res) {
    fs.readFile('bai6_read.html', function(err, data) {   /*Doc file*/
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);                                    /*Viet full file ra response*/
        return res.end();
    });
    }).listen(8080);