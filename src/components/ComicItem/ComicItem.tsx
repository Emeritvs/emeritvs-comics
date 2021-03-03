import React, { useContext, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { ComicsData, ModalContext } from '../../contexts/ModalContext';
import './styles.css';


export default function ComicItem({ id, title, thumbnail, creators, description, key } : ComicsData) {

  const [selected, setSelected] = useState(false);
  const { openModal, configDetailsModal, removeComic, addComic } = useContext(ModalContext);

  function selectComic() {
    const comic = {
      id,
      title,
      thumbnail,
      creators,
      description,
      key
    };

    if (selected) {
      removeComic(comic);
      setSelected(false);
    }
    else {
      addComic(comic);
      setSelected(true);
    }
  }

  function seeDetails() {
    const tempObj : ComicsData = {id, title, thumbnail, creators, description, key};
    configDetailsModal(tempObj);
    openModal();
  }

  return (
    <div className={`comic-container ${selected && 'bg-red-700 border-4 border-red-700 text-white rounded'}`} key={key}>
      <div className="comic-div">
        <img src={`${thumbnail}.jpg`} alt="" className="comic-image" />
        <div className="comic-overlay flex flex-col">
          <div className="comic-overlay-content m-auto text-white flex flex-col">
            <span className="text-sm md:text-md text-center font-bold md:mx-10 mb-2">{title}</span>            

              {thumbnail !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' && (
                <div className="flex flex-col justify-items-center items-center gap-10">
                  <button className="border-2 border-white text-white p-2 rounded" onClick={selectComic}>{selected ? 'Remover' : 'Selecionar'}</button>
                  <button className="border-2 border-white text-white p-2 rounded" onClick={seeDetails}>Detalhes</button>
                </div>
              )}
          </div>
        </div>
      </div>
      <div className="comic-title flex col-span-1 justify-start items-center font-bold" title={title}> {selected && (<FaCheckCircle />)} &nbsp;{title}</div>
    </div>

  );
}