import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

import userRtr from "./src/routes/userRtr.js"
import postRtr from "./src/routes/postRtr.js"

const app = express();


app.use(express.json())
app.use(cors())


const uri = process.env.ATLAS_URI
mongoose.connect(
    uri, {useNewUrlParser: true, useUnifiedTopology: true}
).then(()=>{
    console.log("MongoDB connection established successfully!");
}).catch((error)=>{
    console.log(error);
})

app.use("/user", userRtr);
app.use("/posts", postRtr);


app.get("/", (req, res)=>{
    res.send("helllo world")
})

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`server running at ${port}`);
})