// Componente de paginación reutilizable
const ChevronLeftIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
  </svg>
);

export const Pagination = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  onPreviousPage,
  onNextPage
}) => {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  if (totalPages <= 1) return null;

  return (
    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 px-4 py-3 border-t border-emerald-200 sm:px-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Información de la página */}
        <div className="text-sm text-gray-600 flex items-center gap-2">
          <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Mostrando <span className="font-semibold text-emerald-600">{indexOfFirstItem + 1}</span> a{' '}
          <span className="font-semibold text-emerald-600">{Math.min(indexOfLastItem, totalItems)}</span> de{' '}
          <span className="font-semibold text-emerald-600">{totalItems}</span> usuarios
        </div>

        {/* Controles de paginación */}
        <div className="flex items-center gap-2">
          {/* Botón Anterior */}
          <button
            onClick={onPreviousPage}
            disabled={currentPage === 1}
            className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all ${
              currentPage === 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-100 hover:to-teal-100 border border-emerald-200 shadow-sm hover:shadow-md'
            }`}
          >
            <ChevronLeftIcon />
          </button>

          {/* Números de página */}
          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => {
              if (
                pageNumber === 1 ||
                pageNumber === totalPages ||
                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
              ) {
                return (
                  <button
                    key={pageNumber}
                    onClick={() => onPageChange(pageNumber)}
                    className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all transform hover:scale-105 ${
                      currentPage === pageNumber
                        ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-white shadow-lg'
                        : 'bg-white text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-100 hover:to-teal-100 border border-emerald-200 shadow-sm'
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              } else if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                return (
                  <span key={pageNumber} className="px-2 py-2 text-gray-500">
                    ...
                  </span>
                );
              }
              return null;
            })}
          </div>

          {/* Botón Siguiente */}
          <button
            onClick={onNextPage}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all ${
              currentPage === totalPages
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-100 hover:to-teal-100 border border-emerald-200 shadow-sm hover:shadow-md'
            }`}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
