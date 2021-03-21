const router = require("express").Router();
const express = require("express");
const cloud = require("../cloudinary");
const multe =require("../multer")
const fs = require('fs');
const path = require('path');
const Images =require("../model/image")
router.post('/Images/upload', multe, async (req,res)=>{
    console.log(req.files[0])
    const result =await cloud.uploads(req.files[0].path)
    const imageinfo ={
      Name : req.files[0].originalname,
      url: result.url
    }
    const pics= new Images (imageinfo)
    pics.save()
    fs.unlinkSync(req.files[0].path)
    
    res.json({
      msg:'done',
      pics:pics 
    })
  })
  router.get ('/Images/all',(req,res)=>{
  
    Images.find().then(images=>{
      res.json(images)
    })
  })
  /**router.post('/Images/upload', multer, async (req,res)=>{
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
  }) */
  module.exports = router;