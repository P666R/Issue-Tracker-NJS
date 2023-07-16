const express = require('express');

const router = express.Router();

router
  .route('/')
  .get(projectContoller.getAllProjects)
  .post(projectContoller.createProject);

router
  .route('/:id')
  .get(projectContoller.getProject)
  .patch(projectContoller.updateProject)
  .delete(projectContoller.deleteProject);

module.exports = router;
