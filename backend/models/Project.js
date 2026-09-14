const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    number: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    technologies: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    liveUrl: {
      type: String,
    },
    githubUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);
