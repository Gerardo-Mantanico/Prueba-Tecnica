const usuariosModelo = require('../model/usuarios.model');


const usuariosServicio = {
    obtenerTodos: async () => {
        return await usuariosModelo.getAll();
    },

    obtenerPorId: async (id) => {
        return await usuariosModelo.getById(id);
    },

    crear: async (datosUsuario) => {
        return await usuariosModelo.create(datosUsuario);
    },

    actualizar: async (id, datosUsuario) => {
        return await usuariosModelo.update(id, datosUsuario);
    },

    eliminar: async (id) => {
        return await usuariosModelo.delete(id);
    }
};

module.exports = usuariosServicio;