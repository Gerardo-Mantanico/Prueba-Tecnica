// Componente de tarjeta de usuario para vista móvil
const EditIcon = () => (
  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const DeleteIcon = () => (
  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

export const UsuarioCard = ({ usuario, onEdit, onDelete }) => {
  return (
    <div className="p-4 hover:bg-gray-50 transition-colors">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-gray-500">ID</span>
          <span className="text-sm font-bold text-gray-900">#{usuario.id}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-gray-500">NOMBRE</span>
          <span className="text-sm font-semibold text-gray-900">{usuario.nombre}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-gray-500">EMAIL</span>
          <span className="text-sm text-gray-700 truncate max-w-[200px]">{usuario.email}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-gray-500">EDAD</span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700">
            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {usuario.edad} años
          </span>
        </div>
        
        <div className="flex gap-2 pt-2">
          <button
            onClick={() => onEdit(usuario)}
            className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            title="Editar"
          >
            <EditIcon />
            <span className="ml-2">Editar</span>
          </button>
          <button
            onClick={() => onDelete(usuario.id)}
            className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-semibold rounded-xl hover:from-rose-600 hover:to-pink-600 transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            title="Eliminar"
          >
            <DeleteIcon />
            <span className="ml-2">Eliminar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsuarioCard;
