const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  labels: [
    {
      type: String,
      required: [true, 'Label is required'],
    },
  ],
  author: {
    type: String,
    required: [true, 'Author is required'],
  },
});

const Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;
