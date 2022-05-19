const express = require("express")
const route = express.Router()
const multer = require("multer")
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function(req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })


route.post("/fileanalyse", (req, res, next) => {
  console.log(req.headers)
  console.log(req.body)
  console.log(req.headers['transfer-encoding'])
  next()
}, upload.single("upfile"), (req, res, next) => {
  // console.log(req)//object null
  // console.log(req.file) //object contains data upload
  // console.log(req.rawHeaders)

  // res.json("esto")
  console.log(Object.keys(req))
  const { originalname, mimetype, size } = req.file;
  res.json({
    name: originalname,
    type: mimetype,
    size
  })
})

module.exports = route;

