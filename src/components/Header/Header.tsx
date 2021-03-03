import React from 'react';
import MarvelLogo  from '../../assets/images/marvel-logo.png';
import { FaBars } from 'react-icons/fa';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="header-container flex mx-auto bg-gray-800 text-white px-10 py-4 md:px-20 md:py-10">
      <div className="flex w-full md:w-auto md:ml-12">
        <div className="grid grid-cols-1 w-full">

          <div className="flex items-center">
            <Link to="/" className="font-bold"><img src={MarvelLogo} alt="MarvelLogo"/></Link>

            {/* Collapse Button */}
            <button className="md:hidden ml-auto p-2 cursor-pointer text-white"><FaBars size={24} /></button>
          </div>
        </div>
      </div>

      {/* Web Menu */}
      {/* <ul className="hidden ml-auto md:flex md:flex-row">
        <li className="pr-5 flex flex-wrap justify-center content-center"><a href="#home" className="cursor-pointer header-item text-white font-bold">Home</a></li>
        <li className="pr-5 flex flex-wrap justify-center content-center"><a href="#about" className="cursor-pointer header-item text-white font-bold">Sobre Nós</a></li>
        <li className="pr-5 flex flex-wrap justify-center content-center"><a href="#services" className="cursor-pointer header-item text-white font-bold">Serviços</a></li>
        <li className="pr-5 flex flex-wrap justify-center content-center"><a href="#portifolio" className="cursor-pointer header-item text-white font-bold">Portifólio</a></li>
        <li className="pr-5 flex flex-wrap justify-center content-center"><a href="#contact" className="cursor-pointer header-item text-white font-bold">Contato</a></li>
      </ul> */}
    </nav>
  );
}