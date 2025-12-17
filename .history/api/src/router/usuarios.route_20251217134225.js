const express = require('express');
const router = express.Router();
const usuariosController = require('../controller/usuarios.controller.js');

// Ruta para obtener todos los usuarios
router.get('/', usuariosController.getAllUsuarios);

// Ruta para obtener un usuario por ID
router.get('/:id', usuariosController.getUsuarioById);

// Ruta para crear un nuevo usuario
router.post('/', usuariosController.createUsuario);

// Ruta para actualizar un usuario por ID
router.put('/:id', usuariosController.updateUsuario);

// Ruta para eliminar un usuario por ID
router.delete('/:id', usuariosController.deleteUsuario);    