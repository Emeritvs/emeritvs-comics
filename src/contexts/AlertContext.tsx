import React, { Children, createContext, ReactNode, useState } from "react";

export interface AlertContextData {
  showSuccess: boolean;
  showError: boolean;
  openSuccess: () => void;
  openError: () => void;
  dismissSuccess: () => void;
  dismissError: () => void;
}


interface AlertProviderProps {
  children: ReactNode;
}

export const AlertContext = createContext({} as AlertContextData);

export function AlertProvider({ children } :  AlertProviderProps) {

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  function openSuccess(){
    setShowSuccess(true);
  }

  function openError(){
    setShowError(true);
  }

  function dismissSuccess(){
    setShowSuccess(false);
  }

  function dismissError(){
    setShowError(false);
  }


  return (
    <AlertContext.Provider value={{
      showSuccess,
      showError,
      openSuccess,
      openError,
      dismissSuccess,
      dismissError
    }}>
      {children}
    </AlertContext.Provider>
  );
}