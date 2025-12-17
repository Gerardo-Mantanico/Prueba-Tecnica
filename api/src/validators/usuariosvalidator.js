const Joi = require('joi');

const usuariosSchema = Joi.object({
  nombre: Joi.string()
    .min(3)
    .max(100)
    .required()
    .messages({
      'string.empty': 'El nombre es requerido',
      'string.min': 'El nombre debe tener al menos 3 caracteres',
      'string.max': 'El nombre no puede exceder 100 caracteres',
      'any.required': 'El nombre es requerido'
    }),

     email: Joi.string()
    .email()
    .required()
    .messages({
      'string.email': 'El email debe ser válido',
      'any.required': 'El email es requerido'
    }),
  
  edad: Joi.number()
    .integer()
    .min(18)
    .max(100)
    .required()
    .messages({
      'number.base': 'La edad debe ser un número',
      'number.min': 'La edad debe ser mayor o igual a 18',
      'number.max': 'La edad no puede ser mayor a 100',
      'any.required': 'La edad es requerida'
    }),

  
});

const usuariosUpdateSchema = Joi.object({
  nombre: Joi.string().min(3).max(100),
  edad: Joi.number().integer().min(18).max(100),
  email: Joi.string().email()
}).min(1);

module.exports = {
  usuariosSchema,
  usuariosUpdateSchema
};
