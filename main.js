const mongoose   = require('mongoose');
const path       = require('path');
const express    = require('express');
const bodyParser = require('body-parser');
const connectDB  = require('./config/db.js');

connectDB();

const app = express();

//Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//Routes
app.use('/books',require('./routes/books.js'));
app.use('/books',require('./routes/index.js'));
//Static folder
app.use(express.static(path.join(__dirname , 'public')));

const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => { console.log(`Listening on port ${PORT}`)});
