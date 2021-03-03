import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { ModalContext } from '../../contexts/ModalContext';

export default function SendButton() {

  const { selectedComics, selectedLenght, openModal, configEmailModal } = useContext(ModalContext);

  function sendComics() {
    configEmailModal();
    openModal();
  }

  return (
    <div className="w-full bg-red-700 hover:bg-red-900 rounded my-10 p-4 cursor-pointer" onClick={sendComics}>
      <span className="text-white text-md md:text-3xl flex items-center"> <FaEnvelope size={32}/> &nbsp; Enviar Selecionados ({selectedLenght})</span>
    </div>
  );
}