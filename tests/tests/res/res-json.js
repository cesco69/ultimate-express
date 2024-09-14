// must support res.json()

import express from "express";

const app = express();

app.get('/test', (req, res) => {
    res.json({ test: 'test' });
});

app.listen(13333, async () => {
    console.log('Server is running on port 13333');

    const response = await fetch('http://localhost:13333/test');
    console.log(await response.json());
    process.exit(0);
});