const { Move, Game, Board } = require('../models');

exports.makeMove = async (req, res) => {
  const { gameId, column } = req.body;
  const game = await Game.findByPk(gameId, { include: [Board] });
  if (game.status !== 'ongoing') {
    return res.status(400).json({ error: 'Game is not ongoing' });
  }

  const board = game.Board;
  const grid = board.grid;
  for (let row = 5; row >= 0; row--) {
    if (!grid[row][column]) {
      grid[row][column] = req.user.id;
      await Move.create({ gameId, playerId: req.user.id, column });
      await board.save();
      return res.json(grid);
    }
  }

  res.status(400).json({ error: 'Column is full' });
};
