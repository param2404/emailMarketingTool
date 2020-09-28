const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config(path.resolve(process.cwd(), './.env'));
const port = process.env.PORT;
const cors = require('cors');

// Setup server
const app = express();
const server = require('http').createServer(app);
app.use(cors());

app.use('/api/mail', require('./server/api/mail'));

// Start server
server.listen(port, () => {
    console.log('Server is running at port ' + port)
})

exports = module.exports = app;