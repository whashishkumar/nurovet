'use client';

import React from 'react';

interface PaginationConfig {
  totalPages: number;
  initialPage?: number;
  maxVisiblePages?: number;
}

interface PaginationProps {
  config: PaginationConfig;
  currentPage: number;
  onChange?: (page: number) => void;
}

export default function Pagination({ config, currentPage, onChange }: PaginationProps) {
  const { totalPages, maxVisiblePages = 4 } = config;

  if (totalPages <= 1) return null;

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onChange?.(page);
  };

  const getVisibleRange = () => {
    const half = Math.floor(maxVisiblePages / 2);

    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, start + maxVisiblePages - 1);

    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    return { start, end };
  };

  const { start, end } = getVisibleRange();

  return (
    <div className="flex items-center gap-3">
      {/* Previous */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
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
          {start > 2 && <span className="px-1 text-gray-400">...</span>}
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
            aria-current={isActive ? 'page' : undefined}
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
      {end < totalPages && (
        <>
          {end < totalPages - 1 && <span className="px-1 text-gray-400">...</span>}
          <button
            onClick={() => handlePageChange(totalPages)}
            className="h-12 w-12 rounded-full flex items-center justify-center border border-gray-300 hover:border-[#0b5d3b] hover:text-[#0b5d3b]"
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className={`
          h-12 w-12 rounded-full flex items-center justify-center
          border text-xl transition
          ${
            currentPage === totalPages
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
