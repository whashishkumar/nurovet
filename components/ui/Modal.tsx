'use client';

import React, { ReactNode, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: string; // Tailwind max-w class (ex: "max-w-4xl")
  height?: string; // Tailwind height class (ex: "h-[80vh]")
  showCloseButton?: boolean;
  closeOnBackdrop?: boolean;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  maxWidth = 'max-w-4xl',
  height = 'h-[80vh]',
  showCloseButton = true,
  closeOnBackdrop = true,
}: ModalProps) {
  // ESC key close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      onClick={closeOnBackdrop ? onClose : undefined}
    >
      <div className={`relative w-full ${maxWidth} ${height}`} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 md:-top-5 md:-right-5
                       bg-white text-black rounded-full p-2 shadow-lg
                       hover:scale-110 transition z-10"
          >
            <FiX size={22} />
          </button>
        )}

        {/* Content */}
        <div className="w-full h-full rounded-xl overflow-hidden bg-black">{children}</div>
      </div>
    </div>
  );
}
