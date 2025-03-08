// Create web server
// Create a web server that listens to the port 3000 and returns the comments data when a GET request is made to the path /comments.
// The comments data is stored in the comments.js file. The comments data should be returned as a JSON response.
// Use the http module to create the server and read the comments data from the comments.js file. The comments.js file will have the following data:
// module.exports = [
//   {
//     name: 'John',
//     message: 'Hello, World!',
//   },
//   {
//     name: 'Doe',
//     message: 'Hi, there!',
//   },
// ];
// The server should listen to the port 3000 and return the comments data when a GET request is made to the path /comments.
// The server should return a 404 status code if the path is not /comments.
// The server should return a 200 status code if the path is /comments and the comments data is successfully returned.

const http = require('http');
const comments = require('./comments');

const server = http.createServer((req, res) => {
  if (req.url === '/comments' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(comments));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});