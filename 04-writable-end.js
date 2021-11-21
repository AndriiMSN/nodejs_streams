const { createWriteStream } = require('fs');

const writable = createWriteStream('./output.txt');

writable.write('First line\n');
writable.write('Second line\n');
writable.write('Third line\n');

writable.end('Finished');

// Will cause error
writable.write('ONE MORE PLS');