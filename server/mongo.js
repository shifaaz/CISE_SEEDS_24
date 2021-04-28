const mongoose = require('mongoose')
const mongoPath = `mongodb+srv://shahil:xH2fIp0ecaBfSIN5@cluster0.1gqxl.mongodb.net/seedsDB?retryWrites=true&w=majority`

module.exports = async () => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    return mongoose
}