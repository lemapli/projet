// routes/boardRoutes.js
const express = require('express');
const router = express.Router();
const boardController = require('../controllers/boardController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, boardController.createBoard);
router.get('/:id', authMiddleware, boardController.getBoardById);
router.put('/:id', authMiddleware, boardController.updateBoard);
router.delete('/:id', authMiddleware, boardController.deleteBoard);

module.exports = router;
