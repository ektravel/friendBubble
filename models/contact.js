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
    relationship: {
        type: String, 
        required: true 
    },
    occupation:String,
    notes: String  
});

//the collection will be called "contacts" when we look for it in MongoDB
const Contact = mongoose.model("Contact", ContactSchema);
module.exports = Contact;