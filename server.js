import http from 'http';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
  res.writeHead( 'Content-Type', 'text/plain' );
  res.end('Hello World\n');
});

server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});