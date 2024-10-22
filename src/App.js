// src/App.js
import React from "react";
import Header from "./components/Header";
import FixedNav from "./components/FixedNav";
import HeroSection from "./components/HeroSection";
import ImageGallery from "./components/ImageGallery";
import CarouselEmpresas from "./components/CarouselEmpresas";
import Destacados from "./components/Destacados";

function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <FixedNav />
      <div className="">
        <HeroSection />
        <div className="mt-[130px]"></div>
        <ImageGallery />
        <Destacados/>
        <CarouselEmpresas />
      </div>
    </div>
  );
}

export default App;
