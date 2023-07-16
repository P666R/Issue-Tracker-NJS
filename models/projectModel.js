const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Project name is required'],
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
  },
  author: {
    type: String,
    required: [true, 'Project author is required'],
  },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
