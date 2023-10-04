const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
      trim: true,
    },
    projectDescription: {
      type: String,
      required: true,
      trim: true,
    },
    projectAuthor: {
      type: String,
      required: true,
      trim: true,
    },
    issues: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Issue',
      },
    ],
  },
  {
    timestamps: true,
    strictQuery: true,
  },
);

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
