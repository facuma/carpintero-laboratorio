import React, { useState, useEffect, useRef } from 'react';

// import {  
//   NewspaperIcon, // Ícono para "Carpintería" (puedes cambiarlo)
//   UsersIcon,    // Ícono para "Comunidad"
//   CalendarDaysIcon // Ícono para "Eventos" (puedes cambiarlo)
// } from '@heroicons/react/24/outline' 






function Comunidad() {
  const numbers = [
    { value: 8, label: 'PROYECTOS REALIZADOS' },
    { value: 50, label: 'CARPINTEROS APASIONADOS' },
    { value: 10, label: 'HORAS DE CONTENIDO' },
  ];

  const [currentNumbers, setCurrentNumbers] = useState(numbers.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Detener la observación una vez que es visible
        }
      },
      { threshold: 0.5 } // Ajustar el umbral según sea necesario
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let animationId;

    if (isVisible) { // Solo animar si es visible
      const animateNumbers = () => {
        setCurrentNumbers(prevNumbers => {
          return prevNumbers.map((num, index) => {
            const targetNumber = numbers[index].value;
            if (num < targetNumber) {
              return num + 1;
            }
            return num;
          });
        });
        animationId = requestAnimationFrame(animateNumbers);
      };

      animationId = requestAnimationFrame(animateNumbers);
    }

    return () => cancelAnimationFrame(animationId);
  }, [isVisible, numbers]);

  return (
    <div className=" py-10"> 

      <div className="  text-center "> 
      <div class="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto grid grid-cols-1 lg:grid-cols-3 lg:gap-20 gap-10 mb-16">
          <div className='bg-white py-8 rounded-2xl px-5'>
            <div class="mx-auto h-24 w-24 rounded-full bg-verde-claro flex items-center justify-center">
              <svg class="h-12 w-12 text-verde-osc"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <p class="mt-2 text-xl  font-bold text-verde-osc">CURSO</p>
            <p class="text-md text-gray-800 text-center mt-1">
              Domina las técnicas esenciales de la carpintería de laboratorio en nuestro curso online.
            </p>
          </div>
          <div className='bg-white py-8 rounded-2xl px-5'>
            <div class="mx-auto h-24 w-24 rounded-full bg-verde-claro flex items-center justify-center">
              <svg class="h-12 w-12 text-verde-osc"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <p class="mt-2 text-xl  font-bold text-verde-osc">COMUNIDAD</p>
            <p class="text-md text-gray-800 text-center mt-1">
              Únete a nuestra comunidad de carpinteros apasionados, comparte tus proyectos y aprende de otros.
            </p>
          </div>
      <div className='bg-white py-8 rounded-2xl px-5'>
        
    <div class="mx-auto h-24 w-24 rounded-full bg-verde-claro flex items-center justify-center">
      <svg class="h-12 w-12 text-verde-osc"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </div>
    <p class="mt-2 text-xl  font-bold text-verde-osc">EVENTOS</p>
    <p class="text-md text-gray-800 text-center mt-1">
      Participa en eventos exclusivos, talleres presenciales y demostraciones online.
    </p>
  </div>
</div>
<div className="bg-white py-24">
<div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8"> 
        <h2 className="text-3xl font-bold text-verde-osc mb-24  ">LA COMUNIDAD POR DENTRO</h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 max-w-6xl mx-auto justify-center align-center
         md:grid-cols-4 gap-10 md:gap-24"> {/* Grilla para las tarjetas */}
          
            <div  className="bg-white rounded-lg h "> {/* Tarjeta */}
              <div className=" bg-gray-200 rounded-lg "><img src="https://i.ibb.co/5YjhZxG/IMG-2947.png" className='h-auto w-auto' alt="IMG-2947"  border="0"/></div> {/* Espacio para la imagen */}
            </div>
            <div  className="bg-white rounded-lg "> {/* Tarjeta */}
              <div className=" bg-gray-200 rounded-lg "><img src="https://i.ibb.co/mXD6JK6/IMG-2948.png" className='h-auto w-auto' alt="IMG-2948" height="70%" border="0"/></div> {/* Espacio para la imagen */}
            </div>
            <div className="bg-white rounded-lg  "> {/* Tarjeta */}
              <div className=" bg-gray-200 rounded-lg "><img src="https://i.ibb.co/ynk0BqT/IMG-2949.png" className='h-auto w-auto' alt="IMG-2949"  border="0"/>
              </div> {/* Espacio para la imagen */}
            </div>
            <div  className="bg-white rounded-lg "> {/* Tarjeta */}
              <div className=" bg-gray-200 rounded-lg "><img src="https://i.ibb.co/Ph5cKJN/IMG-2950.png" className='h-auto w-auto' alt="IMG-2950"  border="0"/></div> {/* Espacio para la imagen */}
            </div>
          
       </div>
       
       <div ref={sectionRef} className="mt-16 grid grid-cols-1 sm:grid-cols-1 max-w-6xl mx-auto justify-center align-center md:grid-cols-3 gap-24">
      {currentNumbers.map((num, index) => (
        <div key={index}>
          <p className="text-3xl font-bold text-gray-800">{num}</p>
          <p className="text-sm font-medium text-gray-500">{numbers[index].label}</p>
        </div>
      ))}
    </div>

    <a href="https://wa.me/5493625190474?text=Hola!%20Quiero%20reservar%20mi%20lugar%20en%20el%20curso%20de%20carpinteros%20de%20laboratorio." target="_blank" rel="noopener noreferrer">
      <button className="bg-verde-osc hover:bg-marron text-white w-11/12 font-bold py-3 px-6 rounded-lg mt-10">
        RESERVAR MI LUGAR
      </button>
    </a>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Comunidad;