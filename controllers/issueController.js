const Issue = require('../models/issueModel');
const APIFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAllIssues = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Issue.find(), req.query)
    .filter()
    .sort()
    .limitFields();

  const issues = await features.query;

  res.status(200).json({
    status: 'success',
    results: issues.length,
    data: {
      issues,
    },
  });
});

exports.getIssue = catchAsync(async (req, res, next) => {
  const issue = await Issue.findById(req.params.id);

  if (!issue) {
    return next(new AppError('No issue found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      issue,
    },
  });
});

exports.createIssue = catchAsync(async (req, res, next) => {
  const issue = await Issue.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      issue,
    },
  });
});

exports.updateIssue = catchAsync(async (req, res, next) => {
  const issue = await Issue.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!issue) {
    return next(new AppError('No issue found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      issue,
    },
  });
});

exports.deleteIssue = catchAsync(async (req, res, next) => {
  const issue = await Issue.findByIdAndDelete(req.params.id);

  if (!issue) {
    return next(new AppError('No issue found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
