module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define('Board', {
    grid: {
      type: DataTypes.JSON,
      allowNull: false,

      defaultValue: Array(6).fill().map(() => Array(7).fill(null)),
      validate: {

        isSixRows(value) {
          if (!Array.isArray(value) || value.length !== 6) {
            throw new Error('Le plateau doit contenir 6 lignes.');
          }

          value.forEach(row => {
            if (!Array.isArray(row) || row.length !== 7) {
              throw new Error('Chaque ligne du plateau doit contenir 7 colonnes.');
            }
          });
        }
      }
    }
  }, {
    tableName: 'boards',
    timestamps: true
  });

  Board.associate = (models) => {

    Board.belongsTo(models.Game, { foreignKey: 'gameId' });
  };

  return Board;
};
