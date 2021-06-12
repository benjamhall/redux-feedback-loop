const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


//
router.post('/feedback', (req, res) => {
    let newFeedback = req.body;
    console.log('Adding feedback', newFeedback);

    let queryText = `INSERT INTO "`

    
})

module.exports = router;