const mongoose = require("mongoose")

//Schema

const bookSchema = new mongoose.Schema({
    bookName:{
        required:[true,'Book name is required'],
        type: String
    },
    authorName:{
        required:[true,'Author name is required'],
        type: String
    },
    publishedDate:{
        type: Date,
        default: new Date()
    },
    price:{
        type: Number,
        required: [true,'Price is required']
    },
    status:{
        type:Boolean,
        default: false
    }
},{
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals: true
        },
        timestamps: true
    }) 

const Book = mongoose.model("Book",bookSchema)

module.exports = Book