const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const fs = require('fs');
const cloud = require("../cloudinary");
const multe =require("../multer")
const ImagesRouter = require ("./routers/img")
require("dotenv").config();
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use("/Images", ImagesRouter);
mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MONGO connected on port 8000");
  }
)
app.post('/Images', multerC , async (req,res)=>{
  console.log(req.files[0])
  const result =await cloudinaryC.uploads(req.files[0].path)
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
app.get ('/Images',(req,res)=>{
  
  image.find().then(images=>{
    res.json(images)
  })
})
/**app.delete ('/Images',(req,res)=>{
 console.log(req.body)
  image.deleteOne({ Name:req.params.Name}).then(images=>{
    res.json(images)
  })
}) */
app.delete ('/Images',(req,res)=>{
 console.log(req.body)
  image.deleteOne({ Name:'a.jpg'}).then(images=>{
    res.json(images)
  })
})
app.post ('/search',(req,res)=>{
  const pic=req.body
  console.log(req.body)
  image.findOne({ Name:'quote.jpg'}).then(images=>{
    res.json(images)
  })
})
  const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`the server is running on port : ${PORT}`));