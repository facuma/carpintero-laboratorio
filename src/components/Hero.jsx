import React from "react";

function Hero() {
  return (
    <div className=" py-10">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-36">
        <img src="https://i.ibb.co/nPtxfZz/logoclb.png" alt="logoclb" border="0"/>
        </div>
        <h1 className="text-4xl font-bold text-white mt-6">
          APRENDE CARPINTERÍA DESDE 0
        </h1>
        <p className="text-lg text-white mt-2">
          Domina el arte de la madera y crea tus propios proyectos.
        </p>
        <div className="my-10 ">
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/qZUEp-20_oA?si=j5AOVvKH8xURUYcR?controls=0&modestbranding=1&rel=0&showinfo=0"
              title="YouTube video player"
              width="100%"
              height="100%"
              frameborder="0"
              allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
        <button className="bg-white hover:bg-verde-clar w-1/2 text-verde-osc font-bold py-3 px-6 rounded-lg mt-10">
          QUIERO UNIRME
        </button>
      </div>
    </div>
  );
}

export default Hero;