const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name:{ 
        type: String, 
        required: true 
    },
    email: {
        type: String,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    frequency: {
        type: Number,
        required: true,
        min: 1,
        max: 10
    },
    relationship: {
        type: String, 
        required: true 
    },
    notes: String  
});

//the collection will be called "contacts" when we look for it in MongoDB
const Contact = mongoose.model("Contact", ContactSchema);
module.exports = Contact;