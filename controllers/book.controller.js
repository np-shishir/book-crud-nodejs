const { where } = require("sequelize")
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

exports.deleteBook = async (req, res)=>{
    const id = req.params.id
    await books.destroy({
        where:{id:id}

    })
    res.json({
        message:"book deleted"

    })
}


exports.editBook = async (req,res)=>{
    const id = req.params.id
    const {bookName, bookPrice, bookAuthor, bookGenre} = req.body
    await books.update({bookName, bookPrice, bookAuthor, bookGenre},{
        where:{id:id}

    })
    res.json({
        message:"book edited"
    })
}


exports.singleFetchBook = async (req, res)=>{
    id= req.params.id
    const datas = await books.findByPk(id)
    res.json({
        message:"book fetched",
        datas
        
    })
}