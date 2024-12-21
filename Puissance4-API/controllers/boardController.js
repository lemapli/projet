// controllers/boardController.js
const { Board, Game } = require('../models');

// Créer un nouveau plateau de jeu
exports.createBoard = async (req, res) => {
  try {
    const { gameId, state } = req.body;
    const board = await Board.create({ gameId, state });
    res.status(201).json(board);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer un plateau de jeu par son ID
exports.getBoardById = async (req, res) => {
  try {
    const { id } = req.params;
    const board = await Board.findByPk(id, { include: 'game' });
    if (!board) {
      return res.status(404).json({ error: 'Board not found' });
    }
    res.status(200).json(board);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un plateau de jeu
exports.updateBoard = async (req, res) => {
  try {
    const { id } = req.params;
    const { state } = req.body;
    const board = await Board.findByPk(id);
    if (!board) {
      return res.status(404).json({ error: 'Board not found' });
    }
    board.state = state;
    await board.save();
    res.status(200).json(board);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprimer un plateau de jeu
exports.deleteBoard = async (req, res) => {
  try {
    const { id } = req.params;
    const board = await Board.findByPk(id);
    if (!board) {
      return res.status(404).json({ error: 'Board not found' });
    }
    await board.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
