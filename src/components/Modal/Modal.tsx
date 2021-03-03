import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import ComicDetails from '../ComicDetails/ComicDetails';
import EmailBody from '../EmailBody/EmailBody';
import './styles.css';

export default function Modal() {

  const { 
    isActive,
    title,
    selectedComics,
    type,
    openModal,
    closeModal
  } = useContext(ModalContext);

  return (
    <div className="modal-container lg:flex items-center justify-center fixed left-0 bottom-0 w-full h-full">
      <div className="bg-white rounded-lg w-1/2">
        <div className="flex flex-col items-start p-4">
          <div className="flex items-center w-full mb-10">
            <div className="text-gray-900 font-medium text-lg">{title}</div>

            {/* Close Button */}
            <svg className="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" onClick={closeModal}>
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
            </svg>
          </div>
          <hr></hr>

          {type === 'email' ? (
            <EmailBody />
          ) : (
            <ComicDetails />
          )}


        </div>
      </div>
    </div>
  );
}