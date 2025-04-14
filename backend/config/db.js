const mongoose = require('mongoose');

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDb connected');
    }catch(err){
        console.error(err.message);
    }
}

module.exports = connectDb;