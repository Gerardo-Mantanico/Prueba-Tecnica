import { useState } from "react";
import usuariosService from "../services/usuarios.service";  

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const fetchUsuarios = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await usuariosService.getUsuarios();
            setUsuarios(Array.isArray(response.data) ? response.data : []);
        } catch (err) {
            setError(err.response?.data?.message || err.message || 'Error al cargar usuarios');
            setUsuarios([]);
        } finally {
            setLoading(false);
        }
    }

    const createUsuario = async (data) => {
        setLoading(true);
        setError(null);
        try {
            await usuariosService.createUsuario(data);
            await fetchUsuarios();
            return true;
        } catch (err) {
            setError(err.response?.data?.message || err.message || 'Error al crear usuario');
            return false;
        } finally {
            setLoading(false);
        }
    }

    const updateUsuario = async (id, data) => {
        setLoading(true);
        setError(null);
        try {
            await usuariosService.updateUsuario(id, data);
            await fetchUsuarios();
            return true;
        } catch (err) {
            setError(err.response?.data?.message || err.message || 'Error al actualizar usuario');
            return false;
        } finally {
            setLoading(false);
        }
    }

    const deleteUsuario = async (id) => {
        setLoading(true);
        setError(null);
        try {
            await usuariosService.deleteUsuario(id);
            await fetchUsuarios();
            return true;
        } catch (err) {
            setError(err.response?.data?.message || err.message || 'Error al eliminar usuario');
            return false;
        } finally {
            setLoading(false);
        }
    }

    return {
        usuarios,
        loading,
        error,
        fetchUsuarios,
        createUsuario, 
        updateUsuario ,
        deleteUsuario,
};
}
