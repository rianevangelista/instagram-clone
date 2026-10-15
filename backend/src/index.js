const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://rianoliverevan_db_user:QQTt3w4u6R6VW477@cluster0.uf02khl.mongodb.net/instagram?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.use(require('./routes'));

app.listen(3333);