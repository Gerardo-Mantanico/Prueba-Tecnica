const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello word from API v1');
});


module.exports = router;




