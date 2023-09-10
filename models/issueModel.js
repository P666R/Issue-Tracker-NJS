const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
    },
    labels: [
      {
        type: String,
        required: [true, 'Label is required'],
        trim: true,
      },
    ],
    author: {
      type: String,
      required: [true, 'Author is required'],
      trim: true,
    },
  },
  {
    timestamps: true,
    strictQuery: true,
  },
);

const Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;
