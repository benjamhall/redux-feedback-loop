const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET the feedback from the database
router.get('/', (req,res) => {
    console.log('router get');
    const queryText = `SELECT * FROM feedback`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query`, error);
            res.sendStatus(500);
        });
});

// POST the feedback from the survey into the database
router.post('/', (req, res) => {
    let newFeedback = req.body;
    console.log('Adding feedback', newFeedback);

    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
    .then(result => {
        res.sendStatus(201);
    })
    .catch(error => {
        console.log('Error adding new feedback', error);
        res.sendStatus(500);
    });
});

module.exports = router;