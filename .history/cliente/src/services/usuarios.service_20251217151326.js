
import api from '../api/axios';

const URL = 'usuarios';

const getUsuarios = async () => api.get(`/${URL}`);

const getUsuarioById = async (id) => api.get(`/${URL}/${id}`);

const createUsuario = async (data) => api.post(`/${URL}`, data);

const updateUsuario = async (id, data) => api.put(`/${URL}/${id}`, data);

const deleteUsuario = async (id) => api.delete(`/${URL}/${id}`);


export default {
    getUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario
};
