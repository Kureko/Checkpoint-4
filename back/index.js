const express = require('express');
require('dotenv').config();

const app = express();

const api = require('./app/routes');

app.use('/api', api);

app.listen(process.env.PORT);
