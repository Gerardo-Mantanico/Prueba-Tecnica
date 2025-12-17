const Joi = require('joi');

const productoSchema = Joi.object({
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
  
  precio: Joi.number()
    .positive()
    .precision(2)
    .required()
    .messages({
      'number.base': 'El precio debe ser un número',
      'number.positive': 'El precio debe ser mayor a 0',
      'any.required': 'El precio es requerido'
    }),
});

const productoUpdateSchema = Joi.object({
  nombre: Joi.string().min(3).max(100),
  precio: Joi.number().positive().precision(2),
}).min(1);

module.exports = {
  productoSchema,
  productoUpdateSchema
};
