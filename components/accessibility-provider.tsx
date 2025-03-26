'use client';

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

interface AccessibilityContextType {
  announceToScreenReader: (message: string, politeness?: 'polite' | 'assertive') => void;
  focusRef: React.RefObject<HTMLDivElement | null>;
  setFocus: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}

interface AccessibilityProviderProps {
  children: React.ReactNode;
}

export function AccessibilityProvider({ children }: AccessibilityProviderProps) {
  const [announcements, setAnnouncements] = useState<
    { id: number; message: string; politeness: 'polite' | 'assertive' }[]
  >([]);
  const announcementIdCounter = useRef(0);
  const focusRef = useRef<HTMLDivElement>(null);

  // Function to announce messages to screen readers
  const announceToScreenReader = (
    message: string,
    politeness: 'polite' | 'assertive' = 'polite'
  ) => {
    const id = announcementIdCounter.current++;
    setAnnouncements((prev) => [...prev, { id, message, politeness }]);
    
    // Clean up announcements after they've been read (common practice)
    setTimeout(() => {
      setAnnouncements((prev) => prev.filter((announcement) => announcement.id !== id));
    }, 3000);
  };

  // Function to set focus to the skiplink target
  const setFocus = () => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  };

  // Handle Escape key for closing modals, etc.
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        // You can add specific escape key handling here
        // For example, closing any open modals or dialogs
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const value = {
    announceToScreenReader,
    focusRef,
    setFocus,
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
      
      {/* Hidden elements for screen reader announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcements
          .filter((a) => a.politeness === 'polite')
          .map((a) => (
            <div key={a.id}>{a.message}</div>
          ))}
      </div>
      <div className="sr-only" aria-live="assertive" aria-atomic="true">
        {announcements
          .filter((a) => a.politeness === 'assertive')
          .map((a) => (
            <div key={a.id}>{a.message}</div>
          ))}
      </div>
      
      {/* Skip link target */}
      <div ref={focusRef} tabIndex={-1} />
    </AccessibilityContext.Provider>
  );
}
