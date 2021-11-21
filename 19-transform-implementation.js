const { Transform } = require('stream');
const { createReadStream, createWriteStream } = require('fs');

const readable = createReadStream('./input.txt');
const writable = createWriteStream('./output.txt');

class TransformStream extends Transform {

    constructor(options = {}) {
        super(options);
    }

    _transform(chunk, enc, cb) {
        const chunkStringified = chunk.toString();

        const reversedChunk = chunkStringified.split('').reverse().join('');

        this.push(reversedChunk);

        cb();
    }

    _flush(cb) {
        this.push('Some\n');
        this.push('Additional\n');
        this.push('Data\n');
        this.push('From _flush\n');
        cb();
    }
};

const transform = new TransformStream();

readable.pipe(transform).pipe(writable);