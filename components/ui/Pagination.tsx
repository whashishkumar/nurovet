'use client';
import { useState } from 'react';

export default function Pagination({ config, onChange }: any) {
  const [currentPage, setCurrentPage] = useState(config.initialPage || 1);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > config.totalPages) return;
    setCurrentPage(page);
    onChange?.(page);
  };

  const getVisiblePages = () => {
    const range = 4;
    const total = config.totalPages;
    let start = Math.max(1, currentPage - 1);
    let end = Math.min(total, start + range - 1);
    // Fix window near the end
    if (end - start < range - 1) {
      start = Math.max(1, end - range + 1);
    }
    return { start, end };
  };

  const { start, end } = getVisiblePages();

  return (
    <div className="flex items-center gap-3">
      {/* Previous */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`
          h-12 w-12 rounded-full flex items-center justify-center
          border text-xl transition
          ${
            currentPage === 1
              ? 'border-gray-200 text-gray-300 cursor-not-allowed'
              : 'border-gray-300 hover:border-[#0b5d3b] hover:text-[#0b5d3b]'
          }
        `}
      >
        ←
      </button>
      {/* First + left dots */}
      {start > 1 && (
        <>
          <button
            onClick={() => handlePageChange(1)}
            className="h-12 w-12 rounded-full flex items-center justify-center border border-gray-300 hover:border-[#0b5d3b] hover:text-[#0b5d3b]"
          >
            1
          </button>
          <span className="px-1 text-gray-400">...</span>
        </>
      )}

      {/* Visible Pages */}
      {Array.from({ length: end - start + 1 }).map((_, index) => {
        const page = start + index;
        const isActive = page === currentPage;
        return (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`
              h-12 w-12 rounded-full flex items-center justify-center
              border text-lg font-medium transition
              ${
                isActive
                  ? 'bg-[#0b5d3b] border-[#0b5d3b] text-white'
                  : 'border-gray-300 hover:border-[#0b5d3b] hover:text-[#0b5d3b]'
              }
            `}
          >
            {page}
          </button>
        );
      })}

      {/* Right dots + last */}
      {end < config.totalPages && (
        <>
          <span className="px-1 text-gray-400">...</span>
          <button
            onClick={() => handlePageChange(config.totalPages)}
            className="h-12 w-12 rounded-full flex items-center justify-center border border-gray-300 hover:border-[#0b5d3b] hover:text-[#0b5d3b]"
          >
            {config.totalPages}
          </button>
        </>
      )}

      {/* Next */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === config.totalPages}
        className={`
          h-12 w-12 rounded-full flex items-center justify-center
          border text-xl transition
          ${
            currentPage === config.totalPages
              ? 'border-gray-200 text-gray-300 cursor-not-allowed'
              : 'border-gray-300 hover:border-[#0b5d3b] hover:text-[#0b5d3b]'
          }
        `}
      >
        →
      </button>
    </div>
  );
}
