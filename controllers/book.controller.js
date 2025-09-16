const { books } = require("../database/connection")


exports.fetchBook = async (req, res)=>{
    const datas =await books.findAll()
    res.json({
        message:"book fetched",
        datas

    })
}

exports.addBook = async (req,res)=>{
    const {bookName, bookPrice, bookAuthor, bookGenre}= req.body
    await books.create({
        bookName,
        bookPrice,
        bookAuthor,
        bookGenre
    })
    res.json({
        message:"book added"
        
    })
}