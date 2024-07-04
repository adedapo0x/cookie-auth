const mongoose = require('mongoose')

async function connectDB (){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("DB connection successful")
    } catch (err){
        console.log("Error encountered connecting DB")
    }
}

module.exports = connectDB
