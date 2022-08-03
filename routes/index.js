const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET information page
router.get('/information', (req, res)) => {
  res.render()
}

module.exports = router;
