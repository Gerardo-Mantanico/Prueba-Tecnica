
import axios from 'axios';

const URL = 'usuarios';

const getUsuarios = async () => axios.get(`/${URL}`);

const getUsuarioById = async (id) => axios.get(`/${URL}/${id}`);

const createUsuario = async (data) => axios.post(`/${URL}`, data);

const updateUsuario = async (id, data) => axios.put(`/${URL}/${id}`, data);

const deleteUsuario = async (id) => axios.delete(`/${URL}/${id}`);

