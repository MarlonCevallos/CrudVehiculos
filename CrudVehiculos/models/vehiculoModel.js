
const mongoose = require('mongoose');

const vehiculoSchema = new mongoose.Schema({
  modelo: String,
  marca: String,
  estado: String,
});

const Vehiculo = mongoose.model('Vehiculo', vehiculoSchema);

module.exports = Vehiculo;
