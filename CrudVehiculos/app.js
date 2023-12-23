
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const vehiculoController = require('./controllers/vehiculoController');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Rutas
app.get('/', vehiculoController.listarVehiculos);
app.get('/nuevo', vehiculoController.mostrarFormularioNuevo);
app.post('/nuevo', vehiculoController.crearVehiculo);
app.get('/editar/:id', vehiculoController.mostrarFormularioEditar);
app.post('/editar/:id', vehiculoController.actualizarVehiculo);
app.get('/eliminar/:id', vehiculoController.eliminarVehiculo);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
  db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
  db.once('open', () => {
    console.log('Conectado a MongoDB');
  });
});
