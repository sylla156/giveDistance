const express = require('express')
const app = express();


const connection = require('./models/dbConfig');
const posts = require('./routes/postsController');

app.use('/', posts);

app.listen(8080)