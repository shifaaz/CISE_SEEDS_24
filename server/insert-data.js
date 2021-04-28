const mongo = require('./mongo.js')
const paperSchema = require('./schemas/paperSchema')

const connectToMongoDB = async () => {
    await mongo().then(async (mongoose) => {
        try {
            console.log('Connected to mongodb!')


            const paper = {
                "author": 'Romano, Simone and Scanniello, Giuseppe and Baldassarre, Maria Teresa and Fucci, Davide and Caivano, Danilo} ',
                "description": '',
                "title": 'Results from a replicated experiment on the affective reactions of novice developers when applying test-driven development}',
                "journal": 'arXiv.org',
                "year": '2020',
                volume: 0,
                number: 0,
                "pages": 'arXiv:2004.07524',
                "month": 'apr',
                "url": '',
                "DOI": '',
                "claim": 'Code quality',
                "strength_of_evidence": 'Very Weak',
                "se_practice": 'TDD',

            }

            await new paperSchema(paper).save()
        } finally { mongoose.connection.close() }
    })
}

connectToMongoDB()