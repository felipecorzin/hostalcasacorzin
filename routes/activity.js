const { Router } = require('express');
const { findAll,findOne } = require('../controllers/activity');

const router = Router();

// Obtener todos los infocar
router.get( '/findAll',findAll );
// Obtener un infocar por id
router.get( '/:id',findOne );

module.exports = router;