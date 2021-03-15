const cloudinary = require("cloudinary")
cloudinary.config({
    cloud_name : 'dvl9yijld',
    api_key : '482148614276127',
    api_secret : 'U27mtAxCZ10oTWks0tb38gd_gzg'
})
exports.uploads = (file) =>{
    return new Promise(resolve => {
    cloudinary.uploader.upload(file, (result) =>{
    resolve({url: result.url, id: result.public_id})
    }, {resource_type: "auto"})
    })
}