module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    status: {
      type: DataTypes.ENUM('ongoing', 'completed', 'abandoned'),
      allowNull: false,
      defaultValue: 'ongoing'
    },
    winner: {

      type: DataTypes.INTEGER,
      allowNull: true
    },
    player1Id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    player2Id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'games',
    timestamps: true
  });

  Game.associate = (models) => {

    Game.hasMany(models.Move, { foreignKey: 'gameId' });
    Game.hasOne(models.Board, { foreignKey: 'gameId' });
    
  };

  return Game;
};
