const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');

// POST /api/registro
router.post('/registro', async (req, res) => {
  try {
    const { email, contraseña } = req.body;

    // Revisar si ya existe ese email
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ mensaje: 'El correo ya está registrado' });
    }

    // Hashear la contraseña
    const salt = await bcrypt.genSalt(10);
    const contraseñaHash = await bcrypt.hash(contraseña, salt);

    // Crear nuevo usuario
    const nuevoUsuario = new Usuario({
      email,
      contraseña: contraseñaHash
    });

    await nuevoUsuario.save();
    res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al registrar usuario' });
  }
});

// POST /api/login
router.post('/login', async (req, res) => {
  try {
    const { email, contraseña } = req.body;

    // Buscar el usuario
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(401).json({ mensaje: 'Correo o contraseña incorrectos' });
    }

    // Comparar contraseña hasheada
    const contraseñaValida = await bcrypt.compare(contraseña, usuario.contraseña);
    if (!contraseñaValida) {
      return res.status(401).json({ mensaje: 'Correo o contraseña incorrectos' });
    }

    // Éxito
    res.status(200).json({
      mensaje: 'Login exitoso',
      esPro: usuario.esPro,
      expiracionPro: usuario.expiracionPro,
      nombre: usuario.nombre
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al iniciar sesión' });
  }
});
module.exports = router;