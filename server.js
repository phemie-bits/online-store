const http = require('http');

const server = http.createServer((req,res)=> {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Node Page</title></head>');
    res.write('<body><h1>hello node</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);