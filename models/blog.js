const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: String,
    body: String
});

//the collection will be called "blogs" when we look for it in Mongo
const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;