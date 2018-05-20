const srpc = require('../src');

const server = srpc.createServer();

server.divide = (arg1, arg2) => {
    if (arg2 === 0) {
        throw new Error("Can't divide by zero.");
    }
    return arg1 / arg2;
};
