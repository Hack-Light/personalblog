const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  author: {
    type: String,
    required: true,
  },

  markdown: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },

  postImage: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("posts", postSchema);
