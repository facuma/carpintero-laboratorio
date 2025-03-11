import React, { useState } from 'react';
import { db } from '../firebase'; // Importa la configuración de Firebase
import { collection, addDoc } from 'firebase/firestore';
import { CheckBadgeIcon } from '@heroicons/react/24/solid'

function FormularioReserva() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Guardar los datos en Firebase
      await addDoc(collection(db, 'reservas'), {
        nombre: nombre,
        apellido: apellido,
        mail: email,
        telefono: telefono,
        fecha: new Date(),
      });

      // Redirigir a WhatsApp con los datos del formulario
      const mensaje = `Hola! Me interesa reservar un espacio en el curso de carpintería. 
                        Mi nombre es ${nombre} ${apellido}!.`;
      const urlWhatsApp = `https://wa.me/5493625190474?text=${encodeURIComponent(mensaje)}`; 
      window.location.href = urlWhatsApp;

    } catch (error) {
      console.error('Error al procesar la reserva: ', error);
      alert('Hubo un error al procesar la reserva. Por favor, intenta de nuevo más tarde.');
    }
  };

  return (
    <div className=" py-10">
      <div class="py-10 bg-gray-100 ">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Este curso de Carpintería de Laboratorio es para ti si...</h2>
              <ul class="text-gray-600 list-none"> 
                <li class="mb-4">Sueñas con crear tus propios muebles y objetos de madera. ¿Imaginas diseñar y construir esa mesa que siempre quisiste, o regalar piezas únicas hechas por ti?</li>
                <li class="mb-4">Buscas una actividad creativa y manual que te desconecte de la rutina. La carpintería es una forma de expresión artística que te permite trabajar con tus manos y crear algo tangible.</li>
                <li class="mb-4">Te apasiona la tecnología y quieres aplicarla a la carpintería. En este curso, aprenderás a usar herramientas eléctricas para llevar tus proyectos al siguiente nivel.</li>
                <li class="mb-4">Valoras la precisión y el detalle en tu trabajo. La carpintería de laboratorio se enfoca en la creación de piezas con acabados impecables y un alto nivel de detalle.</li>
                <li class="mb-4">Quieres formar parte de una comunidad de carpinteros apasionados.  Comparte tus proyectos, aprende de otros y encuentra inspiración en nuestra comunidad online.</li>
              </ul>

              <p class="text-gray-700 font-medium mt-8 text-center">
                <strong>¿Te identificas con alguna de estas afirmaciones?</strong> Entonces, ¡este curso es para ti! Inscríbete ahora y comienza a construir tus sueños en madera.
              </p>
            </div>
          </div>


          <div className="bg-white py-24 mb-24" >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Beneficios adicionales</h2>
        <div className="bg-gray-100 rounded-lg p-6"> {/* Contenedor único para todos los beneficios */}
          <ul className="list-none text-center">
            <li className="mb-4 mx-auto flex items-start">
              <CheckBadgeIcon className="w-6 h-6 text-green-500 mr-2" />
              <p>
                <span className="font-bold">Acceso a la comunidad exclusiva</span> dentro de la escuela de
                carpinteros de laboratorio (ECL) donde se comparte proyectos,
                opiniones y consejos con otros alumnos (<span className="line-through text-gray-500">$100.000</span> <span className="text-green-500 font-bold">$20.000</span>).
              </p>
            </li>
            <li className="mb-4 mx-auto flex justify-center items-center">
              <CheckBadgeIcon className="w-6 h-6 text-green-500 mr-2" />
              <p>
                <span className="font-bold">Clases especiales</span> dentro de la comunidad de ECL (<span className="line-through text-gray-500">$50.000</span> <span className="text-green-500 font-bold">$10.000</span>).
              </p>
            </li>
            <li className="mb-4 flex justify-center items-center">
              <CheckBadgeIcon className="w-6 h-6 text-green-500 mr-2" />
              <p>
                <span className="font-bold">Acceso GRATIS a un curso completo de CANVAS</span> valorado en $200.000 (<span className="line-through text-gray-500">$200.000</span> <span className="text-green-500 font-bold">$40.000</span>).
              </p>
            </li>
            <li className="mb-4 flex justify-center items-center">
              <CheckBadgeIcon className="w-6 h-6 text-green-500 mr-2" />
              <p>
                <span className="font-bold">Acceso a material audiovisual complementario,</span> de 4 módulos,
                donde se explica de manera muy sencilla y didáctica todo lo
                necesario para iniciarse en carpintería (<span className="line-through text-gray-500">$200.000</span> <span className="text-green-500 font-bold">40.000</span>).
              </p>
            </li>
            <li className="mb-4 flex justify-center items-center">
              <CheckBadgeIcon className="w-6 h-6 text-green-500 mr-2" />
              <p>
                <span className="font-bold">Acompañamiento permanente (24/7)</span> por parte del equipo de la
                ECL (<span className="line-through text-gray-500">$100.000</span> <span className="text-green-500 font-bold">$20.000</span>).
              </p>
            </li>
            <li className="mb-4 flex justify-center items-center"> {/* Nuevo beneficio */}
              <CheckBadgeIcon className="w-6 h-6 text-green-500 mr-2" />
              <p>
                <span className="font-bold">Acceso a contenido pregrabado y a clases en vivo anteriores</span> (<span className="line-through text-gray-500">$70.000</span> <span className="text-green-500 font-bold">19.000</span>).
              </p>
            </li>
          </ul>
        </div>
        <div className="mt-8 text-center">
          <p className="text-xl font-bold">
            Valor total de los beneficios: <span className="line-through text-gray-500 mr-2">$720.000</span><br/> <span className="text-green-500 mt-14 font-bold text-6xl">$149.000</span>
          </p>
        </div>
        <a href="https://wa.me/5493814691035?text=Hola!%20Quiero%20reservar%20mi%20lugar%20en%20la%20Escuela%20de%20Carpinteros%20de%20laboratorio." target="_blank" rel="noopener noreferrer">
        <button className="bg-verde-osc w-1/2  text-white font-bold py-3 px-6 rounded-lg mt-10">
          Acceder Ahora
        </button></a>
      </div>
    </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-24 lg:px-8">
      
        <h2 className="text-6xl font-bold text-white mb-6 text-center">Reservar espacio para el curso</h2>
        <p className="text-center text-white font-bold text-xl mb-8">Precio: $10.000 (Pesos Argentinos)</p>
        <div className="bg-white max-w-3xl mx-auto rounded-2xl shadow-lg p-6">
          
           
              
            <div className="flex items-center justify-center">
            <a href="https://wa.me/5493625190474?text=Hola!%20Quiero%20reservar%20mi%20lugar%20en%20la%20Escuela%20de%20Carpinteros%20de%20laboratorio." target="_blank" rel="noopener noreferrer">
              <button
                type="submit"
                className="bg-verde-osc text-white w-1/2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Reservar mi lugar por $10.000
              </button></a>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default FormularioReserva;