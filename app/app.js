const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Secure Pipeline Active'));
app.listen(3000);