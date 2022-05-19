const express = require("express")
const route = express.Router()
const multer = require("multer")
const upload = multer({ dest: "uploads/" })


route.post("/fileanalyse", (req, res, next) => {
  console.log(req.headers)
  console.log(req.body)
  console.log(req.headers['transfer-encoding'])
  next()
},/*upload.single("upfile"),*/(req, res, next) => {
  // console.log(req)//object null
  // console.log(req.file) //object contains data upload
  // console.log(req.rawHeaders)

  res.json("esto")
  // console.log(Object.keys(req))
  // const { originalname, mimetype, size } = req.file;
  // res.json({
  //   name: originalname,
  //   type: mimetype,
  //   size
  // })
})

module.exports = route;

