
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://TU USUARIO:TU CLAVE@cluster0.undhtk9.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
