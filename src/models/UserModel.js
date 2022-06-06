const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    dateofbirth:{
        type:String,
        required:true,
    }   ,
   
},
{
    timestamps:true
})

const myDB = mongoose.connection.useDb("database");
const StudentModel = myDB.model("student",StudentSchema,"student");
module.exports =  StudentModel;