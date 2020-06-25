process.env.UV_THREADPOOL_SIZE = 1
const cluster = require("cluster");
const crypto = require("crypto")
// Is the file being executed in master mode ?
if (cluster.isMaster) {
    // Cause index.js to be executed *again* but
    // in child mode.
    console.log('inside cluster.isMaster true');
    cluster.fork();
} else {
    // I am a child, I am going to act like a server 
    // and nothing else.
    console.log('inside cluster.isMaster false');
    const express = require("express");
    const app = express();

    app.get('/', (req, res) => {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            res.send("Hi theres");
        });
    });

    app.get('/fast', (req, res) => {
        res.send("This is fast!");
    });

    app.listen(3000, () => {
        console.log("app running at port 3000")
    })
}
