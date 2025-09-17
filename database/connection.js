//this project using Postgres with Supabase
//next using mysql using xampp


const {Sequelize, DataTypes}=require("sequelize")
const bookModel = require("./models/book.model")
const sequelize = new Sequelize("postgresql://postgres.axsbajjdcdgkuyusfixg:naidu9765@aws-1-ap-south-1.pooler.supabase.com:6543/postgres")

sequelize.authenticate()
.then(()=>{
    console.log("db authenticated")

})
.catch((err)=>{
    console.log("error authenticating")

})



const db = {}
db.sequelize = sequelize
db.Sequelize = Sequelize
db.books = bookModel(sequelize, DataTypes)

module.exports = db




sequelize.sync({alter:false}).then(()=>{
    console.log("migration success")

})
