import React, { useContext } from 'react';
import AutorIcon from '../../assets/images/autor.png';
import { ModalContext } from '../../contexts/ModalContext';

export default function ComicDetails() {
  const { comic } = useContext(ModalContext);

  return (
    <div className="w-full lg:flex">
      <div className="h-48 lg:h-auto border-2 border-gray-400 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
        <img src={`${comic.thumbnail}.jpg`} alt={comic.title}/>
      </div>
      <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-black font-bold text-xl mb-2">{comic.title}</div>
          {comic.description !== null && (<p className="text-grey-darker text-base">{comic.description}</p>)}
        </div>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src={AutorIcon} alt="Autor Avatar" />
          <div className="text-sm">
            
            <p className="text-black font-bold leading-none">{comic.creators.items.length > 0 && (`${comic.creators.items[0].name}`)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}