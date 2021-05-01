const mongoose = require("mongoose");
const studentSchema =  new mongoose.Schema({
    id : {
        type:String,
        required:true,
        unique:true
    },
    password : {
        type:String,
        required:true
    }
})

const Register2 = new mongoose.model("Register2", studentSchema);
module.exports=Register2;
