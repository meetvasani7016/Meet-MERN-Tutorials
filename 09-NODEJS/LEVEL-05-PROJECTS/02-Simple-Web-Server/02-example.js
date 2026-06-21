const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome Home</h1><p>Served directly via Node.js HTTP</p>');
  } else if (req.url === '/api/info') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ project: "Simple Web Server", status: "Active" }));
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>About Us</h1>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end("404 Page Not Found");
  }
});

server.listen(8000, () => {
  console.log("Web server online at http://localhost:8000/");
});