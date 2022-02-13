const express = require('express')
const router  = express.Router();
const PostsModels = require('../models/PostsModel');


router.get('/get', (req,res) => {
   PostsModels.get()
   const results = PostsModels.getR()
   res.send(results);
})


router.post('/posts', (req,res) => {
   
   
  PostsModels.set(req.body.message)
  PostsModels.get()
  const results = PostsModels.getR()
  res.send(results);
})

module.exports = router;