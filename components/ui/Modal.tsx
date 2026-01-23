'use client';
import React, { ReactNode, useEffect, useRef } from 'react';
import { FiX } from 'react-icons/fi';
import clsx from 'clsx';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: string;
  height?: string;
  showCloseButton?: boolean;
  closeOnBackdrop?: boolean;
  backdropBlur?: boolean;
  title?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  maxWidth = 'max-w-4xl',
  height = 'max-h-[85vh]',
  showCloseButton = true,
  closeOnBackdrop = true,
  backdropBlur = true,
  title = 'Modal Dialog',
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // ESC + Focus Trap
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      // Focus trap
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Auto focus modal
    setTimeout(() => {
      modalRef.current?.focus();
    }, 50);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={clsx(
        'fixed inset-0 z-9999 flex items-center justify-center px-4',
        'transition-opacity duration-300',
        backdropBlur && 'backdrop-blur-sm'
      )}
      onClick={closeOnBackdrop ? onClose : undefined}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          'relative w-full',
          maxWidth,
          height,
          'bg-white rounded-4xl ',
          'transform transition-all duration-300',
          'scale-95 opacity-0 animate-modalIn',
          'focus:outline-none'
        )}
      >
        {showCloseButton && (
          <button
            onClick={onClose}
            aria-label="Close modal"
            className={clsx(
              'absolute -top-4 -right-4 md:-top-5 md:-right-5 z-20',
              'bg-white text-black rounded-full p-2 shadow-lg',
              'hover:scale-110 hover:bg-gray-200 transition'
            )}
          >
            <FiX size={22} />
          </button>
        )}
        <div className="w-full h-full overflow-y-auto rounded-xl">{children}</div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-modalIn {
          animation: modalIn 0.25s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
