import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'


function LinksComponent() {
  const links = [
    { url: './curso', texto: 'SOBRE EL CURSO' },
    { url: '', texto: 'Link 2' },
    { url: '#', texto: 'Link 3' },
    // ... más links
  ];

  return (
    <div className="background-main min-h-screen  py-10">
        <div className="flex justify-center mb-14 mt-14 h-36">
        <img src="https://i.ibb.co/nPtxfZz/logoclb.png" alt="logoclb" border="0"/>
        </div>
        <div className="max-w-xs mb-14 mx-auto grid grid-cols-4 gap-1"> {/* Contenedor para las redes sociales */}
        <a href="https://www.facebook.com/tu-pagina-de-facebook" target="_blank" rel="noopener noreferrer" className="mr-4">
          <FontAwesomeIcon icon={faFacebookF} size="2x" className="text-white hover:text-white" />
        </a>
        <a href="https://www.instagram.com/tu-perfil-de-instagram" target="_blank" rel="noopener noreferrer" className="mr-4">
          <FontAwesomeIcon icon={faInstagram} size="2x" className="text-white " />
        </a>
        <a href="https://twitter.com/tu-usuario-de-twitter" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} size="2x" className="text-white" />
        </a>
        <a href="https://twitter.com/tu-usuario-de-twitter" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} size="2x" className="text-white" />
        </a>
      </div>
      <div className="max-w-2xl  mx-auto py-4 px-4 sm:px-6 lg:px-8 rounded-xl shadow-2xl bg-white">
      
        <h2 className="text-3xl font-bold text-gray-800 my-6 text-center">Carpinteros de Laboratorio</h2>
        <div className="grid grid-cols-1 gap-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="bg-verde-osc hover:bg-marron text-white font-bold py-3 px-6 rounded-lg text-center" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {link.texto}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LinksComponent;