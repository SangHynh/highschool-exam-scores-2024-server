const express = require('express');
const router = express.Router();
const scoreController = require('../controllers');

// Route to get score by student number 
router.get('/scores/:sbd', scoreController.getScoresByID);

module.exports = router;