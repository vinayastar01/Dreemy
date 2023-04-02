const mongoose=require("mongoose")

const eventSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    bdate: {
        type : String,
        required : true
    },
   description:{
    type: String,
    required: true
   },
   footfall:{
    type:SVGAnimatedInteger,
    required:true 
   },
   types:{
    type:String,
    required:true
   },
   email:{
    type:string,
    required:true,
    unique:true
   },
   yornot:{
    type:Boolean,
    required:true
   },
    


});
const event = new mongoose.model('Event',eventSchema);
 module.exports = event;
