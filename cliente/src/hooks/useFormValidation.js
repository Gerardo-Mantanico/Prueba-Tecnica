// Custom hook para manejar validaciones de formulario
import { useState } from 'react';

export const useFormValidation = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let errorMsg = '';
    
    switch (name) {
      case 'nombre':
        if (value.length > 0 && value.length < 3) {
          errorMsg = 'El nombre debe tener al menos 3 caracteres';
        } else if (value.length > 100) {
          errorMsg = 'El nombre no puede exceder 100 caracteres';
        }
        break;
        
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value.length > 0 && !emailRegex.test(value)) {
          errorMsg = 'El email no es válido';
        }
        break;
        
      case 'edad':
        const edadNum = parseInt(value);
        if (value !== '') {
          if (edadNum < 18) {
            errorMsg = 'La edad debe ser mayor o igual a 18 años';
          } else if (edadNum > 120) {
            errorMsg = 'La edad no puede ser mayor a 120 años';
          }
        }
        break;
    }
    
    return errorMsg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    const errorMsg = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: errorMsg
    }));
  };

  const resetForm = () => {
    setFormData(initialValues);
    setErrors({});
  };

  const setValues = (values) => {
    setFormData(values);
    setErrors({});
  };

  const isFormValid = () => {
    return (
      Object.values(formData).every(value => value.toString().trim() !== '') &&
      Object.values(errors).every(error => !error)
    );
  };

  const hasErrors = () => {
    return Object.values(errors).some(error => error);
  };

  return {
    formData,
    errors,
    handleChange,
    resetForm,
    setValues,
    isFormValid,
    hasErrors
  };
};

export default useFormValidation;
