const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  contraseña: {
    type: String,
    required: true
  },
  esPro: {
    type: Boolean,
    default: false
  },
  expiracionPro: Date
});

module.exports = mongoose.model("Usuario", UsuarioSchema);

