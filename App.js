const express =  require("express");

const nodeQuestions = require("./corrected.js")
const cors = require("cors")

const app = express();

app.use(cors())
app.use(express.json())



app.get("/",(req,res)=>{

    res.send({nodeQuestions})
})

app.listen(3000,()=>{
    console.log("App is running now!!!")
})