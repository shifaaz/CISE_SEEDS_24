const mongo = require('./mongo.js')
const paperSchema = require('./schemas/paperSchema')
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {

    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(_dirname, "../client", "build", "index.html"))
    });
}


const connectToMongoDB = async () => {
    await mongo().then(async (mongoose) => {
        try {
            console.log('Connected to mongodb!')

        } finally { mongoose.connection.close() }
    })
}

connectToMongoDB()