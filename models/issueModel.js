const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema(
  {
    issueName: {
      type: String,
      required: true,
      trim: true,
    },
    issueDescription: {
      type: String,
      required: true,
      trim: true,
    },
    issueLabels: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],
    issueAuthor: {
      type: String,
      required: true,
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
