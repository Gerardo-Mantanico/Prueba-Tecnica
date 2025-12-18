import { useState, useEffect } from "react";
import { useUsuarios } from "../hooks/useUsuarios";
import UsuariosTable from "../components/UsuariosTable";
import UsuariosForm from "../components/UsuariosForm";
import Swal from 'sweetalert2';


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


  const handleSubmit = async (data) => {
    let success;
    if (usuarioEditando) {
      success = await updateUsuario(usuarioEditando.id, data);
      if (success) {
        setUsuarioEditando(null);
        Swal.fire({
          icon: 'success',
          title: '¡Actualizado!',
          text: 'Usuario actualizado exitosamente',
          timer: 2000,
          showConfirmButton: false,
          iconColor: '#34d399',
          confirmButtonColor: '#10b981',
          background: '#f0fdf4',
          color: '#065f46'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error || 'No se pudo actualizar el usuario',
        });
      }
    } else {
      success = await createUsuario(data);
      if (success) {
        Swal.fire({
          icon: 'success',
          title: '¡Creado!',
          text: 'Usuario creado exitosamente',
          timer: 2000,
          showConfirmButton: false,
          iconColor: '#34d399',
          confirmButtonColor: '#10b981',
          background: '#f0fdf4',
          color: '#065f46'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error || 'No se pudo crear el usuario',
        });
      }
    }
  };

  const handleEdit = (usuario) => {
    setUsuarioEditando(usuario);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#f87171',
      cancelButtonColor: '#10b981',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      iconColor: '#fbbf24'
    });

    if (result.isConfirmed) {
      const success = await deleteUsuario(id);
      if (success) {
        Swal.fire({
          icon: 'success',
          title: '¡Eliminado!',
          text: 'Usuario eliminado exitosamente',
          timer: 2000,
          showConfirmButton: false,
          iconColor: '#34d399',
          confirmButtonColor: '#10b981',
          background: '#f0fdf4',
          color: '#065f46'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error || 'No se pudo eliminar el usuario',
        });
      }
    }
  };

  const handleCancel = () => {
    setUsuarioEditando(null);
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <svg className="w-12 h-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
              Gestión de Usuarios
            </h1>
          </div>
          <p className="text-gray-500 text-lg">
            Administración completa de usuarios
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="md:col-span-1 ">
            <UsuariosForm
              usuarioEdit={usuarioEditando}
              onSubmit={handleSubmit}
              onCancel={handleCancel}
            />
          </div>
          <div class="md:col-span-2 ">

            <UsuariosTable
              usuarios={usuarios}
              onEdit={handleEdit}
              onDelete={handleDelete}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

