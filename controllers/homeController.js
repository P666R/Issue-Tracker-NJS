const Project = require('../models/projectModel');

exports.home = async (req, res) => {
  try {
    const projects = await Project.find();

    res.render('home', {
      title: 'IssueTracker | Home',
      projects,
    });
  } catch (error) {
    console.log('error retrieving projects', error);
  }
};
