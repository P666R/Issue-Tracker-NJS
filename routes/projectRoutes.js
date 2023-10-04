const express = require('express');
const projectController = require('../controllers/projectController');

const router = express.Router();

router.post('/addProject', projectController.addProject);
router.get('/deleteProject', projectController.deleteProject);

module.exports = router;
