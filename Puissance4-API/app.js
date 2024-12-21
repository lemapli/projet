const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const authRoutes = require('./routes/authRoutes');
const gameRoutes = require('./routes/gameRoutes');
const moveRoutes = require('./routes/moveRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/games', gameRoutes);
app.use('/api/moves', moveRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
