process.stdin.on('data', (chunk) => {
    const chunkStringified = chunk.toString();

    if (chunkStringified.match('STOP')) {
        process.stdin.pause();

        // Stop emiting "data" for 5 seconds, buffer all the data
        setTimeout(() => {
            process.stdin.resume();
        }, 5000);
    }

    process.stdout.write(chunkStringified);
});