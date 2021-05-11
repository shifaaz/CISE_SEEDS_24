const Transaction = require('../models/fileSchema');
// check if the routing is correct. 


exports.getTransactionByDate = async(req, res) => {


   //get dates from req.query by es6 object destructuring

    let{ startDate, endDate } = req.query;
    // the information is both in by typing. 

  //1. check that date is not empty
   if(startDate === '' || endDate === '') {
   return res.status(400).json({
       status:'failure',
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
const transactions = Transaction.find({ 
  date: {
        $gte: new Date(new Date(startDate)), // greter than operator 
        $lt: new Date(new Date(endDate)) // Less than operator
         }
  }).sort({ date: 'asc'})  // sorted in ascending order
}


 

