const { createServer } = require('http');

const PORT = 3000;

const server = createServer((req, res) => {
    let body = '';

    req.on('readable', () => {
        let chunk;
        while ((chunk = req.read()) !== null) {
            body += chunk.toString();
        }
    });

    req.on('end', () => {
        const parsedBody = JSON.parse(body);
        console.log('Parsed body', parsedBody);
        const propsCount = Object.keys(parsedBody).length;
        console.log('Props count', propsCount);
        res.writeHead(
            200,
            {
                'Content-type': 'text/plain'
            }
        )
        .end(`Body from request has been succesfully accepted and parsed. It has ${propsCount} props`);
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});