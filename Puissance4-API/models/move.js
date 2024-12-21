module.exports = (sequelize, DataTypes) => {
    const Move = sequelize.define('Move', {
      playerId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      column: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  
    return Move;
  };
  