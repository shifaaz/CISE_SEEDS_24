const mongoose = require('mongoose')
const articleSchema = require('../Models/articleSchema')

const publicArticle = mongoose.model('publicArticle', articleSchema);

module.exports = {

    getPublicArticle: function (req, res) {
        publicArticle.find({})
            .then(Articles => res.json(Articles))
            .catch(err => res.status(422).json(err));
    },
    updatePublicArticleRating: function (req, res) {
        publicArticle.findByIdAndUpdate({ _id: req.params.ArticleId }, { $push: req.body }, { new: true })
            .then(Article => res.json(Article))
            .catch(err => res.status(422).json(err));
    },
    declineArticle: function (req, res) {
        declinedArticle.create(req.body)
            .then(newArticle => res.json(newArticle))
            .catch(err => res.status(422).json(err));
    },
    getDeclinedArticle: function (req, res) {
        declinedArticle.find({})
            .then(Articles => res.json(Articles))
            .catch(err => res.status(422).json(err));
    },
    getSpecificArticle: function (req, res) {
        publicArticle.find({ _id: req.params.ArticleId })
            .then(Articles => res.json(Articles))
            .catch(err => res.status(422).json(err));
    },
}
