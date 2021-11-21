const { pipeline } = require('stream');
const { pipeline: pipelinePromisified } = require('stream/promises');
const { createReadStream, createWriteStream } = require('fs');

pipeline(
    process.stdin,
    process.stdout,
    (err) => {
        // handle err
    }
);

const processData = async () => {
    try {
        await pipelinePromisified(
            createReadStream('./input.txt'),
            createWriteStream('./output.txt')
        );
        console.log('Success!');
    } catch (err) {
        console.error(`Error occured: ${err}`)
    } finally {
        console.log('DO SOMETHING IN THE END');
    }
};

processData();


