const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 3001;

const Contact = require("./models/contact");

//Define middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/friendBubble");

// Serve up static assets 
if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"));
}

// app.get("/", (req, res) => {
//     res.send("hi");
// });

app.get("/api/contact", (req, res) => {
    console.log("this should be hit");
    Contact.find({}).then(results => res.json(results));
});

app.post("/api/contact", (req, res) => {
    console.log(req.body);
    
    Contact.create(req.body).then(dbContact => {
        res.json(dbContact);
    });
});

app.use(function(req, res){
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});

//Start the API server
app.listen(PORT, function(){
    console.log(`API Server now listening on port ${PORT}`);
});