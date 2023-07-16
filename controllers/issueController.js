const Issue = require('../models/issueModel');

exports.getAllIssues = async (req, res) => {
  const issues = await Issue.find();

  res.status(200).json({
    status: 'success',
    results: issues.length,
    data: {
      issues,
    },
  });
};

exports.createIssue = async (req, res) => {
  const issue = await Issue.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      issue,
    },
  });
};

exports.getIssue = async (req, res) => {
  const issue = await Issue.findById(req.params.id);

  res.status(200).json({
    status: 'success',
    data: {
      issue,
    },
  });
};

exports.updateIssue = async (req, res) => {
  const issue = await Issue.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: {
      issue,
    },
  });
};

exports.deleteIssue = async (req, res) => {
  const issue = await Issue.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: 'success',
    data: null,
  });
};
