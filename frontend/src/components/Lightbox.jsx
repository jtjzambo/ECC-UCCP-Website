import React, { useEffect, useCallback } from 'react';
import { X } from 'lucide-react';

export const Lightbox = ({ isOpen, onClose, imageSrc, imageAlt, caption }) => {
  // Handle ESC key press
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  // Add/remove event listener for ESC key
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-[10000] p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-8 h-8 text-white" />
      </button>

      {/* Image Container */}
      <div 
        className="relative max-w-[95vw] max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />
        {caption && (
          <p className="mt-4 text-white text-center text-lg max-w-2xl px-4">
            {caption}
          </p>
        )}
      </div>

      {/* Instructions */}
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
        Press ESC or click anywhere to close
      </p>
    </div>
  );
};
