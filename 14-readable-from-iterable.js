const { Readable } = require('stream');

const iterable = {
    from: 1,
    to: 10,
    [Symbol.iterator]() {
        return {
            current: this.from,
            last: this.to,
            next() {
                if (this.current < this.last) {
                    return {
                        done: false,
                        value: this.current++
                    };
                }

                return {
                    done: true,
                    value: this.current
                };
            }
        };
    }
};

const readableFromIterable = Readable.from(iterable);

readableFromIterable.on('data', (chunk) => {
    console.log(chunk);
});