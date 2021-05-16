const articleSchema = require('../../../../../models/articleSchema');
const Transaction = require('../../../../../models/articleSchema');
// check if the routing is correct. 
// needs to go in the controller

//Integreate this with the others 
exports.sortbyDate = async (req, res) => { //exports the information  
    // needs to be imported in the sorting part. 


    //get dates from req.query by es6 object destructuring

    let { startDate, endDate } = req.query; 
    // the information is both in by typing. 

    //1. check that date is not empty
    if (startDate === '' || endDate === '') {
        return res.status(400).json({
            status: 'failure',
            message: 'Please ensure you pick two dates'
        })
    }

    //2. check that date is in the right format
    //expected result: YYY-MMM-DDD

    //only the year required. 
    //console.log({ startDate, endDate});


    //In some cases you'll get a date-time format where you have to separate the date
    //from the time.


    //3. Query database using Mongoose
    //Mind the curly braces
    function general_search () {
        return articleSchema.find({ // 
        date: {
            $gte: new Date(new Date(startDate)), // greter than operator 
            $lt: new Date(new Date(endDate)) // Less than operator
        }
        }).sort({ date: 'asc' });
    }
    const  genral_search = articleSchema.find({ // 
        date: {
            $gte: new Date(new Date(startDate)), // greter than operator 
            $lt: new Date(new Date(endDate)) // Less than operator
        }
    }).sort({ date: 'asc' })  // sorted in ascending order

     // quick search options. 
    const one_year = articleSchema.find({ // 
        date: {
            $gte: new Date(new Date(2020)), // greter than operator 
            $lt: new Date(new Date(2021)) // Less than operator
        }
    }).sort({ date: 'asc' })  // sorted in ascending order

    const five_year = articleSchema.find({ // 
        date: {
            $gte: new Date(new Date(2017)), // greter than operator 
            $lt: new Date(new Date(2021)) // Less than operator
        }
    }).sort({ date: 'asc' })  // sorted in ascending order

    const ten_year = articleSchema.find({ // 
        date: {
            $gte: new Date(new Date(2011)), // greter than operator 
            $lt: new Date(new Date(2021)) // Less than operator
        }
    }).sort({ date: 'asc' })  // sorted in ascending order
}