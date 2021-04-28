const mongo = require('./mongo.js')
const paperSchema = require('./schemas/paperSchema')
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('client/build'));

const connectToMongoDB = async () => {
    await mongo().then(async (mongoose) => {
        try {
            console.log('Connected to mongodb!')

        } finally { mongoose.connection.close() }
    })
}

connectToMongoDB()