import http from 'http';

// Define your server configuration
const hostname = '127.0.0.1';
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set default headers for JSON responses
  res.setHeader('Content-Type', 'application/json');
  
  // Handle requests based on their URL
  if (req.url === '/') {
    // Respond with a simple HTML page
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Welcome to the site</h1></body></html>');
  } else if (req.url === '/api') {
    // Respond with a JSON object containing a greeting message
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Hello API!' }));
  } else {
    // Respond with a 404 Not Found error for all other routes
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
