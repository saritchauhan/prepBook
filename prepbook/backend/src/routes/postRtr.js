import express from "express";
const router = express.Router();


import Post from "../models/postMdl.js";

router.get("/search", (req, res)=>{
    console.log(req.query.search);

    Post.find({ caption: new RegExp(req.query.search, 'i')}).sort({"createdAt": -1})
    .then((posts)=>{
        res.json(posts)
        
    })
    .catch((error)=>{
        res.status(400).send("no previous post found")
    })
})


router.get("/:id", (req, res)=>{
    Post.find({username:req.params.id}).sort({"createdAt": -1})
    .then((posts)=>{
        res.json(posts)
    })
    .catch((error)=>{
        res.status(400).send("no previous post found")
    })
})



router.get("/", (req, res)=>{
    Post.find().sort({"createdAt": -1})
    .then((posts)=>{
        res.json(posts)
    })
    .catch((error)=>{
        res.status(400).send("no previous post found")
    })
})

router.post("/add", (req, res)=>{
    const newPost = new Post({
        
        username:req.body.username,
        caption:req.body.caption,
        image:req.body.image
        
    })

    newPost.save()
    .then(()=>{
        res.send("post Added")
    })
    .catch((error)=>{
        res.send(error)
    })
})


export default router;