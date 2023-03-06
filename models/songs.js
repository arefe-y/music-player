const mongoose=require('mongoose');

const songsSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        
    },
    artist:{
        type:String,
        required:true,
        default:"Unknown"
    },
    path:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("songs",songsSchema)