
const express = require("express");
const multer = require("multer");

//file upload
const Uploadfolder = "/uploads";
const app = express();

//prepar the final multer upload object
var upload = multer({dest:Uploadfolder});

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
    });   

//application rout

app.post("/", upload.array("avatar",4), (req, res)=>{
    res.send('sucessfuly');
});

app.listen(3000,() =>{
console.log("app listening at port 3000");
});


