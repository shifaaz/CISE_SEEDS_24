const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoKey = require("./config/keys").mongoURI
//const routes = require('./Routes/routes');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.URI || mongoKey, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(client => {
        console.log('Connected to Database')
    })
    .catch(console.error)


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
//app.use(passport.initialize());
//require("./config/passport")(passport);

//app.use(routes);
//app.use(specificRoutes);

if (process.env.NODE_ENV === 'production') {

    app.use(express.static('frontend/build'));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "./client", "build", "index.html"));
    });
}

app.get('/', (req, res) =>
    res.send(`Backend server running on PORT:  ${PORT}.`)

)

app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`)
)

module.exports = app;