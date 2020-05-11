const express = require("express");
const router = express.Router();
const debug = require("debug")("app:adminRouter");
const { isAuthenticated } = require("./authRoute");

const Post = require("./../models/blog");
const Contact = require("./../models/contacts");





router.get("/contacts", async function (req, res) {
    let contacts = await Contact.find().sort({ date: -1 });
    res.render("contactsAdmin", {
        title: "My Contacts - Admin - Onoh Somtochukwu",
        contacts,
    });
});