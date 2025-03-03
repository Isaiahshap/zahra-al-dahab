"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { 
  CheckCircleIcon, 
  XCircleIcon, 
  InformationCircleIcon, 
  XMarkIcon 
} from "@heroicons/react/24/outline";

// Toast types
export type ToastType = "success" | "error" | "info";

// Toast message interface
export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type: ToastType;
  duration?: number;
}

// Toast context interface
interface ToastContextValue {
  addToast: (toast: Omit<ToastMessage, "id">) => void;
  removeToast: (id: string) => void;
}

// Create context
const ToastContext = createContext<ToastContextValue | undefined>(undefined);

// Toast provider props
interface ToastProviderProps {
  children: ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (toast: Omit<ToastMessage, "id">) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: ToastMessage = {
      id,
      ...toast,
      duration: toast.duration || 5000,
    };

    setToasts((prev) => [...prev, newToast]);

    // Auto dismiss
    setTimeout(() => {
      removeToast(id);
    }, newToast.duration);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      
      {/* Toast container */}
      <div className="fixed bottom-0 right-0 z-50 p-4 space-y-4 w-full sm:w-96">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`rounded-lg shadow-lg p-4 flex items-start gap-3 transform transition-all duration-300 animate-slide-up
              ${toast.type === "success" ? "bg-green-50 text-green-800 border-l-4 border-green-500" : ""}
              ${toast.type === "error" ? "bg-red-50 text-red-800 border-l-4 border-red-500" : ""}
              ${toast.type === "info" ? "bg-blue-50 text-blue-800 border-l-4 border-blue-500" : ""}
            `}
          >
            {/* Icon */}
            {toast.type === "success" && <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />}
            {toast.type === "error" && <XCircleIcon className="h-6 w-6 text-red-500 flex-shrink-0" />}
            {toast.type === "info" && <InformationCircleIcon className="h-6 w-6 text-blue-500 flex-shrink-0" />}
            
            {/* Content */}
            <div className="flex-1">
              <h3 className="font-medium text-sm">{toast.title}</h3>
              {toast.description && <p className="mt-1 text-sm opacity-90">{toast.description}</p>}
            </div>
            
            {/* Close button */}
            <button
              onClick={() => removeToast(toast.id)}
              className="flex-shrink-0 text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

// Hook to use toast
export function useToast() {
  const context = useContext(ToastContext);
  
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  
  return context;
} 