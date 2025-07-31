// 1. Import the HTTP module
const http = require('http');

// 2. Create the server
const server = http.createServer((req, res) => {
    // Set response header
    res.setHeader('Content-Type', 'text/html');

    // Routing based on request URL
    if (req.url === '/') {
        res.write('<h1>Welcome to the Home Page</h1>');
    } else if (req.url === '/sourcecode') {
        res.write('<h1>This is the Source Code Page</h1>');
    } else if (req.url === '/contact') {
        res.write('<h1>Contact Us at contact@example.com</h1>');
    } else {
        res.statusCode = 404;
        res.write('<h1>404 - Page Not Found</h1>');
    }

    // End the response
    res.end();
});

// 3. Start the server and listen on port 3000
server.listen(3000, () => {
    console.log('🚀 Server is listening on http://localhost:3000');
});