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
          showConfirmButton: false
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
          showConfirmButton: false
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
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      const success = await deleteUsuario(id);
      if (success) {
        Swal.fire({
          icon: 'success',
          title: '¡Eliminado!',
          text: 'Usuario eliminado exitosamente',
          timer: 2000,
          showConfirmButton: false
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

