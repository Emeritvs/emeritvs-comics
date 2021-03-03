import { title } from "process";
import { Children, createContext, ReactNode, useContext, useEffect, useState } from "react";

export interface ModalContextData {
  isActive: boolean;
  title: string;
  selectedComics : ComicsData[];
  type: string;
  comic: ComicsData;
  selectedLenght: number;
  openModal: () => void;
  closeModal: () => void;
  configDetailsModal: (data : ComicsData) => void;
  configEmailModal: () => void;
  removeComic: (data : ComicsData) => void;
  addComic: (data : ComicsData) => void;
}

export interface ComicsData {
  title: string;
  thumbnail: string;
  id: number;
  key: number; 
  description: string;
  creators: ComicsCreators;
}

export interface ComicsCreators {
  avaliable: number;
  collectionURI: string;
  items: [{
    resourceURI: string;
    name: string;
    role: string
  }]
}

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalContext = createContext({} as ModalContextData);

export function ModalProvider({ children } : ModalProviderProps) {

  const [isActive, setIsActive] = useState(false);
  const [title, setTitle] = useState('Enviar por email');
  const [type, setType] = useState('email');
  const [selectedComics, setSelectedComics] = useState<ComicsData[]>([] as ComicsData[]);
  const [comic, setComic] = useState<ComicsData>({} as ComicsData);
  const [selectedLenght, setSelectedLenght] = useState(0);

  //Open active modal in screen
  function openModal(){
    setIsActive(true);
  }

  // Close active modal in screen
  function closeModal(){
    setIsActive(false);
  }

  // Add comic data from email body 
  function addComic(comic : ComicsData) {
    let tempComics : any = selectedComics;
    const found = tempComics.find((tempComic : ComicsData) => tempComic.id === comic.id);

    if (found) return console.warn('Comic já existe no vetor!');

    tempComics.push(comic);
    setSelectedComics(tempComics);
    setSelectedLenght(tempComics.length);
  }


  // Remove comic data from email body
  function removeComic(comic : ComicsData) {
    let tempComics : any = selectedComics;
    const filtered = tempComics.filter((tempComic : ComicsData) => tempComic.id !== comic.id);

    setSelectedComics(filtered);
    setSelectedLenght(filtered.length);
  }

  //Set modal to show details
  function configDetailsModal(comic : ComicsData) {
    setType('details');
    setTitle('Detalhes');
    setComic(comic);
  }
  
  function configEmailModal() {
    setType('email');
    setTitle('Email');
  }

  return (
    <ModalContext.Provider value={{
      isActive,
      title,
      selectedComics,
      type,
      comic,
      selectedLenght,
      openModal,
      closeModal,
      configDetailsModal,
      configEmailModal,
      removeComic,
      addComic
    }}>
      {children}
    </ModalContext.Provider>
  );
}