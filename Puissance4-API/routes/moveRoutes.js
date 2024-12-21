const express = require('express');
const router = express.Router();
const moveController = require('../controllers/moveController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, moveController.makeMove);

module.exports = router;
