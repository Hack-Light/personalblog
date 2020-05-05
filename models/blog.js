const mongoose = require("mongoose");
const marked = require("marked");
const createDomPurify = require("dompurify");
const { JSDOM } = require("jsdom");
const slugify = require("slugify");

const dompurify = createDomPurify(new JSDOM().window);

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

  sanitaizedHtml: {
    type: String,
    required: true,
  },

  slug: {
    type: String,
    required: true,
    unique: true,
  },
});

postSchema.pre("validate", function (next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }

  if (this.markdown) {
    this.sanitaizedHtml = dompurify.sanitize(marked(this.markdown));
  }
  next();
});

module.exports = mongoose.model("Posts", postSchema);
