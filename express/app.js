const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello from Express!'));
app.listen(4000, () => console.log('Express running on port 4000'));