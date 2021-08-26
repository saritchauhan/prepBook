import express from "express";
const router = express.Router();


import User from "../models/userMdl.js";

router.get("/:id", (req, res)=>{
    User.find({"username":req.params.id})
    .then((user)=>{
        res.json(user)
    })
    .catch((error)=>{
        res.status(400).send("Internal error")
    })
})

router.post("/register", (req, res)=>{
    const newUser = new User({
        
        username:req.body.username,
        
    })

    newUser.save()
    .then(()=>{
        res.send("user Added")
    })
    .catch((error)=>{
        res.send(error)
    })
})



export default router;