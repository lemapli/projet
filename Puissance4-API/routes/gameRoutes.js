const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, gameController.createGame);
router.get('/:id', authMiddleware, gameController.getGame);

module.exports = router;
