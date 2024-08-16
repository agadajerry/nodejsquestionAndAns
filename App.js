import express from "express";
import nodeQuestions from "./corrected.js";
import cors from "cors";


const app = express();
app.use(express.json())

app.use(cors())


app.get("/",(req,res)=>{

    res.send({nodeQuestions})
})

app.listen(3000,()=>{
    console.log("App is running now!!!")
})

export default app;