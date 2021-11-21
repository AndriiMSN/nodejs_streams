const { Buffer } = require('buffer');

const buffer = Buffer.from('Hello World!');

/* // Buffers are iterable (prints char codes)
for (const chunk of buffer) {
    console.log(chunk.toString());
} */

const buffer1 = Buffer.from('Hello');
const buffer2 = Buffer.from(' ');
const buffer3 = Buffer.from('World');

const complexBuffer = Buffer.concat([buffer1, buffer2, buffer3]);

console.log(complexBuffer.toString());