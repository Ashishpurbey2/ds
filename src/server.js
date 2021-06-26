const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const upload = multer({ dest: "./uploads/" });
const fs = require("fs");

const PORT = 3000;

// app.use(cors);
// app.use(express.static("./uploads"));

app.post("/uploadFile", upload.single("image"), (req, res) => {
  let fileType = req.file.mimetype.split("/")[1];
  let newFileName = req.file.filename + "." + fileType;

  fs.rename(
    "./uploads/" + req.file.filename,
    "./uploads/" + newFileName,
    function () {
      res.send("200");
    }
  );
});

app.listen(PORT, () => console.log("App listening on Port", PORT));
