const mongoose=require('mongoose');
const connectDB =()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/empform')
    .then(()=>{
        console.log(`connect`);
    
    })
    .catch((error)=>{
        console.log(error);
    })
}
module.exports = connectDB;