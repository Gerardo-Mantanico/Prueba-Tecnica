const express = require('express');
const router = express.Router();
const userRoutes = require('../router/usuarios.route');


router.use('/usuarios', userRoutes);

router.get('/', (req, res) => {
    res.send('Hello word from API v1');
});


module.exports = router;




