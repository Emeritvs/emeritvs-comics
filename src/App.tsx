import React from 'react';
import { AlertProvider } from './contexts/AlertContext';
import { ModalProvider } from './contexts/ModalContext';
import Routes from './routes';

function App() {
  return (
    <AlertProvider>
      <ModalProvider>
        <Routes />
      </ModalProvider>
    </AlertProvider>
  );
}

export default App;
