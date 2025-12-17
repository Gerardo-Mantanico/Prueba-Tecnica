import { useState, useEffect } from 'react';

export const UsuariosForm = ({ usuarioEdit, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    edad: ''
  });

  useEffect(() => {
    if (usuarioEdit) {
      setFormData({
        nombre: usuarioEdit.nombre,
        email: usuarioEdit.email,
        edad: usuarioEdit.edad
      });
    }
  }, [usuarioEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email || !formData.edad) {
      alert("Por favor completa todos los campos");
      return;
    }

    const usuarioData = {
      nombre: formData.nombre,
      email: formData.email,
      edad: parseInt(formData.edad)
    };

    onSubmit(usuarioData);

    if (!usuarioEdit) {
      setFormData({ nombre: '', email: '', edad: '' });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-100 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          {usuarioEdit ? (
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5" />
            </svg>
          ) : (
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          )}
          {usuarioEdit ? 'Editar Usuario' : 'Nuevo Usuario'}
        </h2>
        {usuarioEdit && (
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
            Modo Edición
          </span>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700">
            Nombre <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ej: Juan Pérez"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="correo@ejemplo.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="edad" className="block text-sm font-semibold text-gray-700">
            Edad <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="edad"
            name="edad"
            min="0"
            value={formData.edad}
            onChange={handleChange}
            placeholder="Ej: 25"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
          />
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-lg hover:from-green-700 hover:to-green-800 transition-all font-semibold shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            {usuarioEdit ? 'Actualizar Usuario' : 'Crear Usuario'}
          </button>

          {usuarioEdit && (
            <button
              type="button"
              onClick={onCancel}
              className="px-8 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 transition-all font-semibold shadow-md hover:shadow-lg"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
export default UsuariosForm;