const mongoose = require("mongoose");
const studentSchema =  new mongoose.Schema({
    
    myName : {
        type:String,
        required:true
    },
    myEvent : {
        type:String,
        required:true
    },
    eventType :{
        type:String,
        required:true
    },
    myRemark :{
        type:String,
        required:true
    },
    myDate :{
        type:String,
        required:true
    },
    appt :{
        type:String,
        required:true
    },
    myDate1 :{
        type:String,
        required:true
    },
    appt1 :{
        type:String,
        required:true
    },
    myLink :{
        type:String,
        required:true
    },
    myLink1 :{
        type:String,
        required:true
    },
    img :{
        type:String,
        required:true

    }
})

const eventpost = new mongoose.model("eventpost", studentSchema);
module.exports=eventpost;