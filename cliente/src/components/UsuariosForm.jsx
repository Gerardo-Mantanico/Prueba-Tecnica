import { useEffect } from 'react';
import useFormValidation from '../hooks/useFormValidation';
import FormField from './FormField';
import FormHeader from './FormHeader';

const INITIAL_VALUES = {
  nombre: '',
  email: '',
  edad: ''
};

export const UsuariosForm = ({ usuarioEdit, onSubmit, onCancel }) => {
  const {
    formData,
    errors,
    handleChange,
    resetForm,
    setValues,
    isFormValid,
    hasErrors
  } = useFormValidation(INITIAL_VALUES);

  useEffect(() => {
    if (usuarioEdit) {
      setValues({
        nombre: usuarioEdit.nombre,
        email: usuarioEdit.email,
        edad: usuarioEdit.edad
      });
    } else {
      resetForm();
    }
  }, [usuarioEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (hasErrors()) {
      alert("Por favor corrige los errores antes de continuar");
      return;
    }

    if (!isFormValid()) {
      alert("Por favor completa todos los campos");
      return;
    }

    const usuarioData = {
      nombre: formData.nombre,
      email: formData.email,
      edad: parseInt(formData.edad)
    };

    onSubmit(usuarioData);
    resetForm();
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border border-emerald-200 max-w-md mx-auto hover:shadow-2xl transition-shadow duration-300">
      <FormHeader isEditing={!!usuarioEdit} />

      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField
          label="Nombre"
          name="nombre"
          type="text"
          value={formData.nombre}
          error={errors.nombre}
          onChange={handleChange}
          placeholder="Gerardo Tax"
        />

        <FormField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          error={errors.email}
          onChange={handleChange}
          placeholder="correo@ejemplo.com"
        />

        <FormField
          label="Edad"
          name="edad"
          type="number"
          value={formData.edad}
          error={errors.edad}
          onChange={handleChange}
          placeholder="25"
          min="18"
          max="120"
        />

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button
            type="submit"
            disabled={!isFormValid()}
            className={`flex-1 py-3 px-6 rounded-xl transition-all font-semibold shadow-lg flex items-center justify-center gap-2 ${
              isFormValid()
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 hover:shadow-xl cursor-pointer transform hover:scale-105'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-60'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {usuarioEdit ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              )}
            </svg>
            {usuarioEdit ? 'Actualizar' : 'Crear'}
          </button>

          {usuarioEdit && (
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 sm:flex-initial bg-gradient-to-r from-gray-400 to-gray-500 text-white py-3 px-6 rounded-xl hover:from-gray-500 hover:to-gray-600 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default UsuariosForm;