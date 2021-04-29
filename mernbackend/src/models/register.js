const mongoose = require("mongoose");
const studentSchema =  new mongoose.Schema({
    uid : {
        type:String,
        required:true,
        unique:true
    },
    password : {
        type:String,
        required:true
    }
})

const Register = new mongoose.model("Register", studentSchema);
module.exports=Register;
