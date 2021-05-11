const Transaction = require('../models/articleSchema'); 
// import another file and then create funtions for year 1,5 and 10 

exports.sortbyDate = async (req, res) => { //exports the information  
    

    let { startDate, endDate } = req.query; 
    // the information is both in by typing. 

    //1. check that date is not empty
    if (startDate === '' || endDate === '') {
        return res.status(400).json({
            status: 'failure',
            message: 'Please ensure you pick two dates'
        })
    }

    const transactions = Transaction.find({ // maybe the Sechma name
        date: {
            $gte: new Date(new Date(startDate)), // greter than operator 
            $lt: new Date(new Date(endDate)) // Less than operator
        }
    }).sort({ date: 'asc' })  // sorted in ascending order
}




