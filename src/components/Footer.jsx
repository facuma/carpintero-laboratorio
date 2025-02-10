import React from 'react';

function Footer() {
  return (
    <footer className="bg-verde-osc text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-sm">&copy; {new Date().getFullYear()} Escuela de Carpinteros de Laboratorio. Todos los derechos reservados.</p>
          </div>
          <div className="flex mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white mr-6">
              Términos y Condiciones
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;