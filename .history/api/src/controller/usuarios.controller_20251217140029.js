const usuariosService = require('../service/usuario.service');
const {usuariosSchema} = require('../validators/usuariosvalidator');



exports.CreateUsuarios = async (req, res) => {
    try {
        
        //validar body
        const {error, value} = usuariosSchema.validate(req.body);
        if (error) {
            return res.status(400).json({message: error.details[0].message});
        }
        const newUsuario = await usuariosService.crear(value);
        res.status(201).json(newUsuario);
    } catch (err) {
        console.error(err);

        if(err.name === 'SequelizeUniqueConstraintError'){
            return res.status(400).json({message: 'Ya existe un usuario con este email'});
        }

        res.status(500).json({message: 'Error al crear el usuario'});
    }
};


exports.getUsuarios = async (req, res) => {
    try {
        const usuarios = await usuariosService.obtenerTodos();
        res.status(200).json(usuarios);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Error al obtener los usuarios'});
    }
};

exports.getUsuarioById = async (req, res) => {
    try {
        const {id} = req.params;
        const usuario = await usuariosService.obtenerPorId(id);
        if (!usuario) {
            return res.status(404).json({message: 'Usuario no encontrado'});
        }
        res.status(200).json(usuario);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Error al obtener el usuario'});
    }
};


exports .updateUsuario = async (req, res) => {
    try {
        const {id} = req.params;

        const {error, value} = usuariosSchema.validate(req.body);
        if (error) {
            return res.status(400).json({message: error.details[0].message});
        }

        const updatedUsuario = await usuariosService.actualizar(id, value);
        if (!updatedUsuario) {
            return res.status(404).json({message: 'Usuario no encontrado'});
        }
        res.status(200).json(updatedUsuario);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Error al actualizar el usuario'});
    }
};

exports.deteleUsuario = async (req, res) => {
    try{
        const {id} = req.params;
        const deleted = await usuariosService.eliminar(id);
        if(!deleted){
            return res.status(404).json({message: 'Usuario no encontrado'});
        }
        res.status(200).json({message: 'Usuario eliminado correctamente'});     
    }catch(err){
        console.error(err);
        res.status(500).json({message: 'Error al eliminar el usuario'});
    }
};