const Project = require('../models/projectModel');
const Issue = require('../models/issueModel');

// function for getting unique authors name to show in the filter form
const getAuthors = async (projectId) => {
  try {
    const globalProject = await Project.findById(projectId).populate({
      path: 'issues',
    });

    const authorSet = new Set(
      globalProject.issues.map((issue) => issue.issueAuthor),
    );
    const authorNames = Array.from(authorSet);
    return authorNames;
  } catch (error) {
    console.log('error in getting authors', error);
  }
};

// controller for showing project issues on issue page
exports.projectIssues = async (req, res) => {
  try {
    const project = await Project.findById(req.query.project_id).populate(
      'issues',
    );

    const authorSet = new Set(project.issues.map((issue) => issue.issueAuthor));

    const authorNames = Array.from(authorSet);

    res.render('issue', {
      title: 'IssueTracker | ProjectIssue',
      project,
      authorNames,
    });
  } catch (error) {
    console.log('error showing project issues', error);
  }
};

// controller for adding the issue to the database
exports.addIssue = async (req, res) => {
  try {
    const { name, author, description, lables } = req.body;

    const issue = await Issue.create({
      issueName: name,
      issueAuthor: author,
      issueDescription: description,
      issueLabels: lables,
    });

    const project = await Project.findById(req.query.project_id);
    project.issues.push(issue);
    await project.save();

    res.redirect(`/issues/projectIssues?project_id=${req.query.project_id}`);
  } catch (error) {
    console.log('error in adding issue', error);
  }
};

// controller for searching the issue based on issue title or issue description
exports.searchIssues = async (req, res) => {
  try {
    const searchText = req.body.search__text;
    const project = await Project.findById(req.query.project_id).populate({
      path: 'issues',
      match: {
        $or: [{ issueName: searchText }, { issueDescription: searchText }],
      },
    });

    const authorNames = await getAuthors(req.query.project_id);

    res.render('issue', {
      title: 'IssueTracker | ProjectIssue',
      project,
      authorNames,
    });
  } catch (error) {
    console.log('error in searching issue', error);
  }
};

// controller for filtering the issues based on labels
exports.filterIssues = async (req, res) => {
  try {
    const project = await Project.findById(req.query.project_id).populate({
      path: 'issues',
      match: {
        $or: [
          { issueLabels: { $in: req.body.f_lables } },
          { issueAuthor: { $in: req.body.authors } },
        ],
      },
    });

    const authorNames = await getAuthors(req.query.project_id);

    res.render('issue', {
      title: 'IssueTracker | ProjectIssue',
      project,
      authorNames,
    });
  } catch (error) {
    console.log('error in filtering issue', error);
  }
};

// controller for deleting the issue from database
exports.deleteIssue = async (req, res) => {
  try {
    const projectId = req.query.project_id;
    const issueId = req.query.issue_id;

    await Project.findByIdAndUpdate(projectId, {
      $pull: { issues: issueId },
    });

    await Issue.deleteOne({ _id: issueId });

    res.redirect(`/issues/projectIssues?project_id=${projectId}`);
  } catch (error) {
    console.log('error deleting issue', error);
  }
};
