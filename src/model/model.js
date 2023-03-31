const mongoose=require("mongoose")

const empSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    email: {
        type : String,
        unique : true,
        required : true
    },
    password:{
        type:String,
        required:true
    },
    usertype:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    }


});
const empCollection = new mongoose.model('empcollection',empSchema);
 module.exports = empCollection;
 const event = new mongoose.model('event',empSchema);
 module.exports = event;