const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
