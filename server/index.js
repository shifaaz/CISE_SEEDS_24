const mongo = require('./mongo.js')
const paperSchema = require('./schemas/paperSchema')

const connectToMongoDB = async () => {
    await mongo().then(async (mongoose) => {
        try {
            console.log('Connected to mongodb!')

        } finally { mongoose.connection.close() }
    })
}

connectToMongoDB()