const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

// serve static files
app.use(express.static('public'));

// don't think i have to do /public, but gonna leave it for now
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
    console.log(`click me http://localhost:${PORT}`)
);