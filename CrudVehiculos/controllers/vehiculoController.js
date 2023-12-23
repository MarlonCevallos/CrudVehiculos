
const Vehiculo = require('../models/vehiculoModel');

exports.listarVehiculos = async (req, res) => {
  const vehiculos = await Vehiculo.find();
  res.render('index', { vehiculos });
};

exports.mostrarFormularioNuevo = (req, res) => {
  res.render('nuevo');
};

exports.crearVehiculo = async (req, res) => {
  const { modelo, marca, estado } = req.body;
  const vehiculo = new Vehiculo({ modelo, marca, estado });
  await vehiculo.save();
  res.redirect('/');
};

exports.mostrarFormularioEditar = async (req, res) => {
  const vehiculo = await Vehiculo.findById(req.params.id);
  res.render('editar', { vehiculo });
};

exports.actualizarVehiculo = async (req, res) => {
  const { modelo, marca, estado } = req.body;
  await Vehiculo.findByIdAndUpdate(req.params.id, { modelo, marca, estado });
  res.redirect('/');
};

exports.eliminarVehiculo = async (req, res, next) => {
    try {
      await Vehiculo.findByIdAndDelete(req.params.id);
      res.redirect('/');
    } catch (error) {
      next(error);
    }
  };
