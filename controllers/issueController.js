const Issue = require('../models/issueModel');

exports.getAllIssues = async (req, res) => {
  try {
    let query = {};

    if (req.query.labels) {
      const labelsToFilter = req.query.labels.split(',');
      query = { labels: { $in: labelsToFilter } };
    }

    const issues = await Issue.find(query);

    res.status(200).json({
      status: 'success',
      results: issues.length,
      data: {
        issues,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createIssue = async (req, res) => {
  try {
    const issue = await Issue.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        issue,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getIssue = async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        issue,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateIssue = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteIssue = async (req, res) => {
  try {
    await Issue.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
