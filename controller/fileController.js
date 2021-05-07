const mongoose = require('mongoose')
const fileSchema = require('../models/fileSchema')

const file = mongoose.model('file', fileSchema);

module.exports = {
    addNewFile: function (req, res) {
        console.log("add file activited");
        file.create(req.body)
            .then(file => res.json(file))
            .catch(err => res.status(422).json(err));
    },
    getFile: function (req, res) {
        file.find({})
            .then(file => res.json(file))
            .catch(err => res.status(422).json(err));
    },
}