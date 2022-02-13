const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const connection = require('./models/dbConfig');
const posts = require('./routes/postsController');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(cors());
app.use('/', posts);


app.listen(8080)