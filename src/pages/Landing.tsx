import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import BGImage from '../assets/images/hq.jpg';

export default function LandingPage() {
  useEffect(() => {
  }, []);
  
  return (
    <div className="h-full w-full bg-gray-200">
      <Header />

      {/* Container Content */}
      <div className="m-10 md:m-40">
        <div className="grid grid-cols-2">
          <div className="flex flex-col col-span-1 justify-center">
            <span className="w-full play-bold font-bold text-xl md:text-5xl">Tenha acesso ao maior acervo digital em apenas um toque</span>
            <Link to="/comics" className="w-1/2 mt-10 bg-gray-800 rounded p-6 text-white text-center">Acessar Biblioteca</Link>
          </div>

          <div className="col-span-1">
            <img src={BGImage} alt="BG"/>
          </div>
        </div>

      </div>
    </div> 
  );
}