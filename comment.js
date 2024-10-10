//Create web server
//Create a web server that listens to requests on port 3000. When a request is received, the server should respond with a status code of 200 and the following text: "Hello, World!".

//Create a web server
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});