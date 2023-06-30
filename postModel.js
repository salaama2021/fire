const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },

surname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    bio:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    dateofbirth:{
        type:String,
        required:true
    },

      employeeposition:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    },


});


module.exports = mongoose.model("Post",postSchema);