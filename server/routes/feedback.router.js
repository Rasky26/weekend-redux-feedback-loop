// Import the core libraries
const express = require('express')
const router = express.Router()

// Import the DB configurations
const pool = require("../modules/pool")


// Adds a new feedback item to the database
// Must contain `feeling`, `support`, `understanding`, and an optional `comments`.
router.post('/',  (req, res) => {
    const feedback = req.body;
    console.log(`On POST route for feedback`, feedback);
  
    const sqlQuery = `
        INSERT INTO "feedback"
            ("feeling", "understanding", "support", "comments")
        VALUES
            ($1, $2, $3, $4);`;

    const sqlParams = [
        feedback.feeling,
        feedback.understanding,
        feedback.support,
        feedback.comments,
    ]
    pool.query(sqlQuery, sqlParams)
      .then(result => {
        res.sendStatus(201);
      })
      .catch(err => {
        console.log(`Error in POST route adding new feedback with ${err}`);
        res.sendStatus(500);
      });
  });
  
  module.exports = router;