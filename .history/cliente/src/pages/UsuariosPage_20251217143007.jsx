import { useState, useEffect } from "react";
import {useUsuarios} from "../hooks/useUsuarios";

import UsuariosTable from "src/components/usuarios/UsuariosTable";
import UsuariosForms from "src/components/usuarios/UsuariosForms";


export const UsuariosPage = () => {
    const {
        usuarios,
        error,
        loading,
        fetchUsuarios,
        createUsuario,
        updateUsuario,
        deleteUsuario,
    } = useUsuarios();

    const [usuariosEditando, setUsuariosEditando] = useState(null);

    useEffect(() => {
        fetchUsuarios();
    }, []);


    const  handleSubmmit = async (data) => {
        let success;
        if(usuariosEditando){
            success = await updateUsuario(usuariosEditando.id, data);
            if(success) setUsuariosEditando(null);
        }else{
            success = await createUsuario(data);
        }
    
    };

    const handleEditar = (usuario) => {
        setUsuariosEditando(usuario);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDetele = async (id) => {
        if(confirm('Estas seguro de eliminar este usuario')){
            await   deleteUsuario(id);
        }
    };

    const handleCancelar = () => {
        setUsuariosEditando(null);
    };

    return (

    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 mb-3">
            Gestión de Productos
          </h1>
          <p className="text-gray-600 text-lg">
            Administra tu inventario de forma fácil y eficiente
          </p>
        </div>
        </div>
    </div>
        
        

