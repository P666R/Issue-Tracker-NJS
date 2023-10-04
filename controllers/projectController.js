const Project = require('../models/projectModel');
const Issue = require('../models/issueModel');

// controller for adding the project through form submission
exports.addProject = async (req, res) => {
  try {
    const { name, description, author } = req.body;

    await Project.create({
      projectName: name,
      projectDescription: description,
      projectAuthor: author,
    });

    res.redirect('back');
  } catch (error) {
    console.log('error while adding project', error);
    res.redirect('back');
  }
};

// controller for deleting the project from database
exports.deleteProject = async (req, res) => {
  try {
    const projectId = req.query.project_id;

    const project = await Project.findById(projectId).populate('issues');

    const issueIds = project.issues.map((issue) => issue._id);
    await Issue.deleteMany({ _id: { $in: issueIds } });

    await Project.findByIdAndDelete(projectId);

    res.redirect('back');
  } catch (error) {
    console.log('error deleting project', error);
    res.redirect('back');
  }
};
