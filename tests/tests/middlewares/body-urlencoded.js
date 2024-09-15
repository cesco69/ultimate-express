// must support urlencoded body parser

import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/abc', (req, res) => {
    res.send(req.body);
});

app.listen(13333, async () => {
    console.log('Server is running on port 13333');

    const response = await fetch('http://localhost:13333/abc', {
        method: 'POST',
        body: 'abc=123',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const text = await response.text();
    console.log(text);

    process.exit(0);

});