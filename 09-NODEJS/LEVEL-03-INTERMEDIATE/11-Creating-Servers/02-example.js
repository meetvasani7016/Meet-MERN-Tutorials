const http = require('http');

const server = http.createServer((req, res) => {
  // Set response headers status and format
  res.writeHead(200, { 'Content-Type': 'application/json' });
  
  if (req.url === '/') {
    res.end(JSON.stringify({ message: "Welcome to Native Node Server" }));
  } else if (req.url === '/status') {
    res.end(JSON.stringify({ status: "Online", uptime: process.uptime() }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end("Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server listening at http://localhost:3000/");
});