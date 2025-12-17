import { useState, useEffect } from "react";
import {useUsuarios} from "../hooks/useUsuarios";
import UsuariosTable from "src/components/usuarios/UsuariosTable";
// import UsuariosForms from "src/components/usuarios/UsuariosForms";


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

    const [usuarioEditando, setUsuarioEditando] = useState(null);

    useEffect(() => {
        fetchUsuarios();
    }, []);


    const  handleSubmit = async (data) => {
        let success;
        if(usuariosEditando){
            success = await updateUsuario(usuariosEditando.id, data);
            if(success) setUsuariosEditando(null);
        }else{
            success = await createUsuario(data);
        }
    
    };

    const handleEdit = (usuario) => {
        setUsuariosEditando(usuario);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (id) => {
        if(confirm('Estas seguro de eliminar este usuario')){
            await   deleteUsuario(id);
        }
    };

    const handleCancel = () => {
        setUsuariosEditando(null);
    };

    return (

    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 mb-3">
            Gestión de Usuarios
          </h1>
          <p className="text-gray-600 text-lg">
            Administracion de usuarios
          </p>
        </div>
       {/* Error Alert */}
        {error && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg shadow-md animate-pulse">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-red-700 font-semibold">{error}</p>
            </div>
          </div>
        )}

        {/* <UsuarioForm
          usuarioEdit={usuariosEditando}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        /> */}

        <UsuarioTable
          productos={usuarios}
          onEdit={handleEdit}
          onDelete={handleDelete}
          loading={loading}
        />
      </div>
    </div>
    );
};

