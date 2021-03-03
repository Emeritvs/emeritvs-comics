import React, { useContext } from 'react';
import { useState } from 'react';
import { AlertContext } from '../../contexts/AlertContext';
import { ComicsData, ModalContext } from '../../contexts/ModalContext';

export default function EmailBody() {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);

  const { closeModal, selectedComics } = useContext(ModalContext);
  const { openSuccess, openError } = useContext(AlertContext);
  
  function sendEmail() {
    if (!validEmail) {
      console.log('hello world');
      openError();
      return false;
    }

    console.warn('Email enviado com sucesso!');
    console.log(selectedComics);
    generateEmail(email, selectedComics);
    closeModal();
  }

  function emailBody(comics : any) {
    let body = '';

    for (let i = 0; i < comics.length; i++) {
      body = body + 
      `<div style="display: flex;">
        <img src="${comics[i].thumbnail}.jpg" style="height: 200px; width: auto;" />
        <ul>
          <li><strong>Title: </strong> ${comics[i].title}</li>
          <li><strong>Author: </strong> ${comics[i].creators.items[0].name || 'Unknown Author'}</li>
          <li><strong>Description: </strong> ${comics[i].description || ''}</li>
        </ul>
      </div> <br />`;
    }

    return body;
  }

  function generateEmail(email : string, comics : ComicsData[]) {
    const from = "From: <span>augustog.sxt@gmail.com</span>";
    const to = `To: <span>${email}</span>`;
    const title = "<span>Comics Selected</span>";

    const body = emailBody(comics);

    const finalEmail = 
    `<p>${from}</p>
    <p>${to}</p>
    <p>${title}</p>
      <br><br>
    ${body}
    `;

    console.log(finalEmail);
    closeModal();
    openSuccess();
  }

  function validateEmail(email : string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function searchHandle(event : any){
    const validation = validateEmail(event.target.value);

    setEmail(event.target.value);
    validation === false ? setValidEmail(false) : setValidEmail(true);
  }

  return (
    <div className="w-full">
      <div className="flex flex-col mt-10 w-full">
        <label htmlFor="email">Destinatário: </label>
        <input type="text" placeholder="Email" className={`w-full p-4 border-2 border-gray-200`} onKeyUp={(event) => searchHandle(event)}/>
      </div>

      <hr></hr>

      <div className="ml-auto mt-20 flex gap-x-4">
        <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" onClick={closeModal}>
          Cancelar
        </button>

        <button 
          className="bg-green-500 hover:bg-green-700 disabled:opacity-50 text-white font-bold py-2 px-4 rounded"
          onClick={sendEmail}
          >
          Enviar
        </button>
      </div>
    </div>
  );
}