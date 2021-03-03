import React, { useContext, useEffect, useState } from "react";
import ComicItem from "../components/ComicItem/ComicItem";
import Header from "../components/Header/Header";
import Modal from "../components/Modal/Modal";
import results from '../results.json';

import { ComicsData, ModalContext, ModalProvider } from '../contexts/ModalContext';
import SendButton from "../components/SendButton/SendButton";
import { SuccessAlert } from "../components/SuccessAlert/SuccessAlert";
import { AlertContext } from "../contexts/AlertContext";
import { ErrorAlert } from "../components/ErrorAlert/ErrorAlert";
import api from "../services/api";

interface ComicsProps {
  param: string;
  query: string[];
}

export default function Comics() {

  const [comics, setComics] = useState([]);
  const [comicsFilter, setComicsFilter] = useState([]);
  const [query, setQuery] = useState('');
  const [modalTitle, setModalTitle] = useState('Enviar por email');
  const [modalActive, setModalActive] = useState(false);

  const {
    isActive,
    title,
    selectedLenght,
    openModal,
    closeModal
  } = useContext(ModalContext);

  const { 
    showSuccess, 
    showError 
  } = useContext(AlertContext);

  //Load
  useEffect(() => {
    api.get('/v1/public/comics').then((response) => {
      setComics(response.data.data.results as any);
      setComicsFilter(response.data.data.results as any);
    });
  }, []);

   // Receive timeout function to pass values;
  const debounce = debounceEvent();

  // Execute a function with timeout effect when keyboard events stop firing
  function debounceEvent(){
    let time : any = null;

    return function(value : string) {
      clearTimeout(time);

      time = setTimeout(() => {
        searchComic(value)
      }, 2000);
    }
  }

  //Call debounce function every time onKeyUp is fired
  function searchHandle(event : any){
    setQuery(event.target.value);
    debounce(event.target.value);
  }

  // Search a comic by input value
  function searchComic(param : string){
    let paramText = param;

    if (paramText === "" || paramText === undefined) {
      setComicsFilter(results as any);
    } 
    else {
      let filter = paramText.toLowerCase();

      let comicsFiltered = comics.filter((comic : any) => {
        for (let i = 0; i < comic.title.length; i++) {
          let title = comic.title || ""; 
        
          if (title.toLowerCase().indexOf(filter) > -1) return comic;
        }
      });

      setComicsFilter(comicsFiltered);
    }
  }

  //Open modal
  function teste(){
    setModalActive(true)
  }

  return (
    <div className="h-full w-full bg-gray-200">
    <Header />

    {/* Container Content */}
    <div className="m-10 md:m-40">
      
      {/* Seach Input */}
      <div className="flex">
        <input type="text" placeholder="Pesquisar..."  className="border-2 border-gray-400 w-full p-2 md:p-10 text-md md:text-2xl" onKeyUp={(event) => searchHandle(event)} />
      </div>

      {/* Button to send email */}
      {selectedLenght > 0 && (<SendButton />)}
      
      {/* List of Comics */}
      <div className="grid grid-cols-1 mt-10 md:grid-cols-6 gap-10">
        {comicsFilter.length > 0 ? (
          comicsFilter.map((comic : any, index : number) => {
            return <ComicItem id={comic.id} title={comic.title} thumbnail={comic.thumbnail.path} creators={comic.creators} description={comic.description} key={index}/>
          })
        ) : 
        (
          <div className="col-span-6 flex justify-center">
            <span className="text-md md:text-3xl font-bold text-center" onClick={openModal}>Não foram encontrados resultados</span>
          </div>
        )}
      </div>
    </div>
    { isActive &&  (<Modal />)}
    { showSuccess && (<SuccessAlert />)}
    { showError && (<ErrorAlert />)}
  </div>
  );
}