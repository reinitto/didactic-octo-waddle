var express = require("express");
const path = require("path");

var PORT = process.env.PORT || 3000;

var app = express();
app.use(express.static(__dirname + "/public"));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, function () {
  console.log("Server is running on port " + PORT);
});
