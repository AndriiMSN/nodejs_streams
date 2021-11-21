const { Transform, pipeline } = require('stream');

const readable = process.stdin;
const writable = process.stdout;

const transform = new Transform({
    transform(chunk, enc, cb) {
        const chunkStringified = chunk.toString().trim();

        const reversedChunk = chunkStringified.split('').reverse().join('');

        //this.push(reversedChunk + '\n');

        cb(null, reversedChunk + '\n');
    }
});

const transform2 = new Transform({
    transform(chunk, enc, cb) {
        const chunkStringified = chunk.toString().trim();

        const reversedChunk = chunkStringified.split('').reverse().join('');

        cb(null, reversedChunk + '\n');
    }
});

pipeline(
    readable,
    transform,
    writable,
    err => {
        console.log(`Error: ${err}`);
    }
);