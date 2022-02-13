const express = require('express')
const router  = express.Router();
const PostsModels = require('../models/PostsModel');


router.get('/posts', (req,res) => {
   PostsModels.get()
   const results = PostsModels.getR()
   res.send(results);
})

module.exports = router;