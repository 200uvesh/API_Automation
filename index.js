require("dotenv").config()
const express = require("express")
const app = express()
 

//middlewar
const viewRoute = require("./routes/route.js")
app.use("/" , viewRoute)


 


//Listner
const PORT = process.env.PORT
app.listen(PORT , ()=>{
    console.log(`Server is started at http://localhost:${PORT}`)
})