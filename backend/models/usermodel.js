var mongoose=require('mongoose');

var userSchema=new mongoose.Schema({
    id:{
       type: Number,
       required:true
    },
    name: {
        type:String,
        required:true
    },
    lname: {
        type:String,
        required:true
    },
    em: {
        type:String,
        required:true
    },
    age :Number,
    dob :String,
    mobile : String
})

module.exports = mongoose.model("user",userSchema);