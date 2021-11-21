// Buffer is global, you don't need to require it
const buf = Buffer.from('BUFFER');

process.stdout.write('LALALALA');
process.stdout.write('\n');
process.stdout.write(buf);
process.stdout.write('\n');

process.stdout.write('Write with callback\n', () => {
    process.stdout.write('\nCallback!');
});