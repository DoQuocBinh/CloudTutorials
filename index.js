var http = require('http');

http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html'});
    let message ='';
    for (let index = 1; index < 10; index++) {
        message += `Hello world ${index}`;
    }
    response.end(message);
   
}).listen(8080);