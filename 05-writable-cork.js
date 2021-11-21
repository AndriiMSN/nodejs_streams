const { createWriteStream } = require('fs');

const writable = createWriteStream('./output.txt');

writable.cork();
writable.cork();
writable.cork();

writable.write('First line\n');
writable.write('Second line\n');
writable.write('Third line\n');
writable.write('Fourth line\n');
writable.write('Fifth line\n');

writable.uncork();
writable.uncork();
writable.uncork();
