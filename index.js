var http = require('http');

http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html'});
    response.end('Hello world1233');
}).listen(8080);