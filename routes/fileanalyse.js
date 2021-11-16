const express = require("express")
const route = express.Router()
const multer = require("multer")
const upload = multer({ dest: "uploads/" })


route.post("/fileanalyse", upload.single("upfile"), (req, res, next) => {
  console.log(req.body)//object null
  console.log(req.file) //object contains data upload
  res.json("hola")
})

module.exports = route;

