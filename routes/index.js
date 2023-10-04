const express = require('express');
const issueRouter = require('./issueRoutes');
const projectRouter = require('./projectRoutes');
const homeController = require('../controllers/homeController');

const router = express.Router();

router.get('/', homeController.home);

router.use('/issues', issueRouter);
router.use('/projects', projectRouter);

module.exports = router;
