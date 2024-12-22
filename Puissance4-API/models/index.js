module.exports = (sequelize, DataTypes) => {
  const Move = sequelize.define('Move', {
    playerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    column: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {

        min: 0,
        max: 6
      }
    }
  }, {
    tableName: 'moves',
    timestamps: true
  });

  Move.associate = (models) => {
    Move.belongsTo(models.Game, { foreignKey: 'gameId' });

  };

  return Move;
};
