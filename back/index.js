const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const api = require('./app/routes');

const app = express();

app.use(bodyParser.json());
app.use(
    cors({
      origin: 'http://localhost:3000'
    })
);

app.use('/api', api);

app.listen(process.env.PORT || 8080, () =>
console.log(`Server is running on port ${process.env.PORT || 8080}.`)
);
