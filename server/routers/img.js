const Images =require("../model/image")
const router = require("express").Router();
const express = require("express");
const cloud = require("../cloudinary");
const multer =require("../multer")
const fs = require('fs');
const path = require('path');

router.post('/Images/upload', multer, async (req,res)=>{
    const result = await cloud.uploads(req.body.pic);
    const imageinfo ={
      Name : result.name,
      url: result.url
    }
    const pics= new Images (imageinfo)
    pics.save()
    res.json({
      msg:'done',
      pics:pics 
    })
  })

  
  module.exports = router;