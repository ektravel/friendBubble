const express = require("express");
const app = express.Router();
const db = require ("../models");

app.get("/contact", (req, res) => {
    db.Contact.find({}).then(results => res.json(results));
});

app.post("/contact", (req, res) => {
    console.log(req.body);
    db.Contact.create(req.body).then(dbContact => {
        res.json(dbContact);
    });
});


app.delete("/contact/:id", (req,res) => {
    db.Contact
    .findById({ _id: req.params.id})
    .then(dbContact => dbContact.remove())
    .then(dbContact=> res.json(dbContact));
});


app.get("/plans", (req, res) => {
    db.Plans.find({}).then(results => res.json(results));
});

app.post("/plans", (req, res) => {
    console.log(req.body);
    db.Plans.create(req.body).then(dbPlans => {
        res.json(dbPlans);
    });
});

app.put("/plans/:id", (req,res)=> {
    db.Plans
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbPlans => res.json(dbPlans));
})

app.delete("/plans/:id", (req,res) => {
    db.Plans
    .findById({ _id: req.params.id})
    .then(dbPlans => dbPlans.remove())
    .then(dbPlans=> res.json(dbPlans));
});


// app.get("/user", (req, res) => {
//     db.User.find({}).then(results => res.json(results));
// });

// app.post("/user", (req, res) => {
//     console.log(req.body);
//     db.User.create(req.body).then(dbUser => {
//         res.json(dbUser);
//     });
// });

module.exports = app;