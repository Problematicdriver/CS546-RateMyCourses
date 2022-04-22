const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    req.session.destroy();  
    res.redirect('/login');
});

module.exports = router;
