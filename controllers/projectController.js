const Project = require('../models/projectModel');

exports.getAllProjects = async (req, res) => {
  const projects = await Project.find();

  res.status(200).json({
    status: 'success',
    results: projects.length,
    data: {
      projects,
    },
  });
};

exports.createProject = async (req, res) => {
  const project = await Project.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      project,
    },
  });
};

exports.getProject = async (req, res) => {
  const project = await Project.findById(req.params.id).populate({
    path: 'issues',
  });

  res.status(200).json({
    status: 'success',
    data: {
      project,
    },
  });
};

exports.updateProject = async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: {
      project,
    },
  });
};

exports.deleteProject = async (req, res) => {
  const project = await Project.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: 'success',
    data: null,
  });
};
