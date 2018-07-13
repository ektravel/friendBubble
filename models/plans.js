const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlansSchema = new Schema({
    title: String,
    guests: Array,
    activity: String,
    relationship: {
        type: String, 
        required: true 
    },
    date: Date,
    notes: String  
});

//the collection will be called "contacts" when we look for it in MongoDB
const Plans = mongoose.model("Plans", PlansSchema);
module.exports = Plans;