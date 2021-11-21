const { createWriteStream } = require('fs');

const readableFromTerminal = process.stdin;
const writableToTerminal = process.stdout;
const writableToFile = createWriteStream('./output.txt');

readableFromTerminal.pipe(writableToTerminal);
readableFromTerminal.pipe(writableToFile);

readableFromTerminal.on('data', (chunk) => {
    const chunkStringified = chunk.toString();
    if (chunkStringified.match('unpipe terminal')) readableFromTerminal.unpipe(writableToTerminal);
    if (chunkStringified.match('unpipe file')) readableFromTerminal.unpipe(writableToFile);
});
