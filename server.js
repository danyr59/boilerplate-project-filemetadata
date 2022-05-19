var express = require('express');
var cors = require('cors');
// var bodyParser = require("body-parser")
require('dotenv').config()

var app = express();

//midleware
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }))
app.use('/public', express.static(process.cwd() + '/public'));

//routes
app.use("/api", require("./routes/fileanalyse"));
app.get('/', function(req, res) {
  // console.log(req.rawHeaders)
  res.sendFile(process.cwd() + '/views/index.html');
});


app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), function() {
  console.log(`Your app is listening on port ${app.get("port")} `)
});
