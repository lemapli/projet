module.exports = (sequelize, DataTypes) => {
    const Board = sequelize.define('Board', {
      grid: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: Array(6).fill().map(() => Array(7).fill(null))
      }
    });
  
    return Board;
  };
  