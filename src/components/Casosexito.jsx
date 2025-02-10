import React from 'react';

function CasosExito() {
  const stories = [
    { 
      image: "imagen_caso_exito_1.jpg", // Reemplaza con la URL de tu imagen
      name: 'Patricio', 
      description: 'Juan aprendió a crear muebles increíbles.' 
    },
    
    // ... más historias de éxito
  ];

  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">NUESTROS ALUMNOS</h2>
        <div className="max-w-2xl m-auto">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-lg ">
              <div className=" rounded-lg overflow-hidden"> {/* Contenedor para la imagen */}
              <div className="my-10">
          <div className="flex justify-center align-middle">
          <iframe className='w' src="https://player.vimeo.com/video/1050169127?h=31df78e86a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="Patricio: De Herrero a Carpintero de Laboratorio"></iframe>
          </div>
        </div>
              </div>
              <div className="mt-4">
                <h3 className="font-bold text-lg">{story.name}</h3>
                <p className="text-gray-700 text-sm">{story.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-verde-osc  text-white font-bold py-3 px-6 rounded-lg mt-10">
          Quiero entrar a la comunidad
        </button>
      </div>
    </div>
  );
}

export default CasosExito;