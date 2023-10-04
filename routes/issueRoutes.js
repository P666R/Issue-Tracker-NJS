const express = require('express');
const issueController = require('../controllers/issueController');

const router = express.Router();

router.get('/projectIssues', issueController.projectIssues);
router.post('/addIssue', issueController.addIssue);
router.post('/searchIssues', issueController.searchIssues);
router.post('/filterIssues', issueController.filterIssues);
router.get('/deleteIssue', issueController.deleteIssue);

module.exports = router;
