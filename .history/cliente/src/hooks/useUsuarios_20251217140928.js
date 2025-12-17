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
            setUsuarios(response.data);
        } catch (err) {
            setError(err);
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
        } catch (err) {
            setError(err);
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
        } catch (err) {
            setError(err);
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
        } catch (err) {
            setError(err);
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
};
}
