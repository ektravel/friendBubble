const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 3001;

const Blog = require("./models/blog");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Add rotues
// app.use(routes);

//Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/my-blog");

app.use(express.static("client/build"));

app.get("/", (req, res) => {
    res.send("hi");
});

app.get("/api/blog", (req, res) => {
    console.log("this should be hit");
    Blog.find({}).then(results => res.json(results));
});

app.post("/api/blog", (req, res) => {
    console.log(req.body);
    
    Blog.create(req.body).then(dbBlog => {
        res.json(dbBlog);
    });
});

app.use(function(req, res){
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, function(){
    console.log(`API Server now listening on port ${PORT}`);
});