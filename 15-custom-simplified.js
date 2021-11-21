const { Writable } = require('stream');

const myWritable = new Writable({
    write(chunk, enc, cb) {
        process.stdout.write(chunk);
        cb();
    }
});

process.stdin.pipe(myWritable);