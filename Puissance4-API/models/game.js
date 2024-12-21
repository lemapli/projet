module.exports = (sequelize, DataTypes) => {
    const Game = sequelize.define('Game', {
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'ongoing'
      },
      winner: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    });
  
    return Game;
  };
  