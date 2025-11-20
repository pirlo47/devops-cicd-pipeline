const express = require('express');
const app = express();
const os = require('os');
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, DevOps!');
});

//The new system health route
app.get('/health', (req, res) => {
    const healthCheck = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now(),
        systemInfo: {
            platform: os.platform(),
            release: os.release(),
            hostname: os.hostname(),
            totalMemory: `${(os.totalmem()/ 1024 / 1024).toFixed(2)} MB`,
            freeMemory: `${(os.freemem()/ 1024 / 1024).toFixed(2)} MB`,
        }
    };
    res.send(healthCheck);
});

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;