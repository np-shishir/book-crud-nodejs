const express = require('express')
const app = express()
const bookRoute = require("./routes/book.route")
app.use(express.json())
const cors = require('cors')


app.use(cors({
    origin:"*"
    
}))
app.use("/", bookRoute)




app.listen(3000, ()=>{
    console.log("server started at port 3000")

})