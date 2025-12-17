const usuariosModelo = require('../model/usuarios.model');


const usuariosServicio = {
    obtenerTodos: async () => {
        return await usuariosModelo.findAll();
    },

    obtenerPorId: async (id) => {
        return await usuariosModelo.findByPk(id);
    },

    crear: async (datosUsuario) => {
        return await usuariosModelo.create(datosUsuario);
    },

    actualizar: async (id, datosUsuario) => {
        const usuarios = await usuariosModelo.findByPk(id);
        if(!usuarios) return null;
        return  await usuarios.update(datosUsuario);
    },

    eliminar: async (id) => {
        const usuarios = await usuariosModelo.findByPk(id);
        if(!usuarios) return null;
        await usuarios.destroy();
        return true
    }
};

module.exports = usuariosServicio;