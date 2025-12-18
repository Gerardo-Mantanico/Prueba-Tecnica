import { useState, useEffect } from 'react';

export const UsuariosForm = ({ usuarioEdit, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    edad: ''
  });

  const [errors, setErrors] = useState({
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
      setErrors({ nombre: '', email: '', edad: '' });
    }
  }, [usuarioEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Actualizar el valor
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validar en tiempo real
    let errorMsg = '';
    
    if (name === 'nombre') {
      if (value.length > 0 && value.length < 3) {
        errorMsg = 'El nombre debe tener al menos 3 caracteres';
      } else if (value.length > 100) {
        errorMsg = 'El nombre no puede exceder 100 caracteres';
      }
    }
    
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value.length > 0 && !emailRegex.test(value)) {
        errorMsg = 'El email no es válido';
      }
    }
    
    if (name === 'edad') {
      const edadNum = parseInt(value);
      if (value !== '') {
        if (edadNum < 18) {
          errorMsg = 'La edad debe ser mayor o igual a 18 años';
        } else if (edadNum > 100) {
          errorMsg = 'La edad no puede ser mayor a 100 años';
        }
      }
    }
    
    setErrors(prev => ({
      ...prev,
      [name]: errorMsg
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que no haya errores
    if (errors.nombre || errors.email || errors.edad) {
      alert("Por favor corrige los errores antes de continuar");
      return;
    }

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
      setErrors({ nombre: '', email: '', edad: '' });
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
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
              errors.nombre ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.nombre && (
            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.nombre}
            </p>
          )}
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
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.email}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="edad" className="block text-sm font-semibold text-gray-700">
            Edad <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="edad"
            name="edad"
            min="18"
            max="100"
            value={formData.edad}
            onChange={handleChange}
            placeholder="Ej: 25 (entre 18 y 120)"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
              errors.edad ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.edad && (
            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.edad}
            </p>
          )}
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