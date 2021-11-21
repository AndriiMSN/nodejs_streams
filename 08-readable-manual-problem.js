const { createWriteStream, createReadStream } = require('fs');

const writable = createWriteStream('./input.txt');

for (let i = 0; i < 10000; i++) {
    writable.write(`Line №${i}\n`);
}

writable.end('Finish line');

let nullCounter = 0;

writable.on('finish', () => {
    const readable = createReadStream('./input.txt');

    // Nulls count depends on interval
    const timer = setInterval(() => {
        if (readable.read() === null) nullCounter++;
    }, 1000);

    readable.on('end', () => {
        timer.close();
        console.log(`Nulls: ${nullCounter}`);
    });
});


