const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Project name is required'],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Project description is required'],
      trim: true,
    },
    author: {
      type: String,
      required: [true, 'Project author is required'],
      trim: true,
    },
    issues: [
      {
        type: mongoose.Schema.ObjectId,
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
