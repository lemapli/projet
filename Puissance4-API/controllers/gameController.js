const { Game, Board } = require('../models');

exports.createGame = async (req, res) => {
  try {
    const game = await Game.create();
    await Board.create({ gameId: game.id });
    res.status(201).json(game);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getGame = async (req, res) => {
  const { id } = req.params;
  const game = await Game.findByPk(id, { include: [Board] });
  if (game) {
    res.json(game);
  } else {
    res.status(404).json({ error: 'Game not found' });
  }
};
