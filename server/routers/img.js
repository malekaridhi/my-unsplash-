const Imagers =require("../model/image")
const router = require("express").Router();
const express = require("express");
const cloud = require("../cloudinary");
const multer =require("../multer")
const fs = require('fs');
const path = require('path');
router.post('/Images/upload', multer, async (req,res)=>{
    console.log(req.files[0])
    const result =await cloud.uploads(req.files[0].path)
    const imageinfo ={
      Name : req.files[0].originalname,
      url: result.url
    }
    const pics= new image (imageinfo)
    pics.save()
    fs.unlinkSync(req.files[0].path)
    res.json({
      msg:'done',
      pics:pics 
    })
  })
