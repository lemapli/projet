const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json')[process.env.NODE_ENV || 'development'];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, DataTypes);
db.Game = require('./game')(sequelize, DataTypes);
db.Move = require('./move')(sequelize, DataTypes);
db.Board = require('./board')(sequelize, DataTypes);

db.Game.hasMany(db.Move, { foreignKey: 'gameId' });
db.Move.belongsTo(db.Game, { foreignKey: 'gameId' });

db.Game.hasOne(db.Board, { foreignKey: 'gameId' });
db.Board.belongsTo(db.Game, { foreignKey: 'gameId' });

module.exports = db;
