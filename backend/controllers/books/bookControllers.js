const expressAsyncHandler = require("express-async-handler");
const Book = require("../../models/book/Book");
const validateMongodbId = require("../../utils/validateMongodbId");


const createBookCtrl = expressAsyncHandler(async(req,res)=>{
    const {_id} = req.user
    // validateMongodbId(_id)
    try {
        const book = await Book.create({
            ...req.body,
            
        })
        res.json({ "success": true })
    } catch (error) {
        res.json({ "success": false })
    }
    
})

const fetchBookCtrl = expressAsyncHandler(async(req,res)=>{
    const searchValue = req.params.val
    try {
        const books = await Book.find({authorName:searchValue}).sort ( { publishedDate : -1} )
        const value = await Book.find({}).count();
        res.json({"success": true,books:books,count:value})
    } catch (error) {
        res.json({ "success": false, books: [], totalBooks: 0 })
    }
    
})

const fetchBooksCtrl = expressAsyncHandler(async(req,res)=>{
    try {
        const books = await Book.find({}).sort ( { publishedDate : -1} )
        const value = await Book.find({}).count();
        res.json({"success": true,books:books,count:value})
    } catch (error) {
        res.json({ "success": false, books: [], totalBooks: 0 })
    }
    
})

const updateBookCtrl = expressAsyncHandler(async(req,res)=>{
    const {id} = req.params
    validateMongodbId(id)
    try {
        const book = await Book.findByIdAndUpdate(id, {
            ...req.body,
        },{
            new:true
        })
        res.json({ "success": true })
    } catch (error) {
        res.json({ "success": false })
    }
})


module.exports = {
    createBookCtrl,
    updateBookCtrl,
    fetchBooksCtrl
}