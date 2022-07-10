const express = require('express');

const emailController = require('../controllers/emailController');

const router = express.Router();

//Simple routing for email handling
router.get('/', emailController.getAllEmails);

router.delete('/:id', emailController.deleteEmail);

module.exports = router;
