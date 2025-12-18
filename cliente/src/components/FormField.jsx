// Componente de campo de formulario reutilizable con validación
const ErrorIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
);

export const FormField = ({ 
  label, 
  name, 
  type = 'text', 
  value, 
  error, 
  onChange, 
  placeholder,
  min,
  max,
  required = true
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-semibold text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        max={max}
        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-300 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm ${
          error ? 'border-red-300 bg-red-50/30' : 'border-emerald-200 hover:border-emerald-300'
        }`}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
          <ErrorIcon />
          {error}
        </p>
      )}
    </div>
  );
};

export default FormField;
