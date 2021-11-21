const { Writable } = require('stream');

class MyWritable extends Writable {
    constructor(options = {}) {
        super(options);
    }

    _write(chunk, enc, cb) {
        process.stdout.write(chunk);
        cb();
    }
}

const myWritable = new MyWritable();

process.stdin.pipe(myWritable);