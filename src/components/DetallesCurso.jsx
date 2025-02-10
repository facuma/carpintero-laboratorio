import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function DetallesCurso() {
  const modules = [
    {
      title: 'M1: Introducción a la carpintería de laboratorio',
      content: [
        'Introducción a la carpintería de laboratorio.',
        'Diferencias entre carpintería tradicional, ebanista, de obra y de laboratorio.',
        'Espacio de trabajo. Seguridad en la carpintería.',
        'Prevención de accidentes.',
        'Herramientas para comenzar en carpintería, manuales y eléctricas.',
        'Cuidados generales de mantenimiento y seguridad.'
      ],
    },
    {
      title: 'M2: Preparación de la madera',
      content: [
        'Preparación de la madera: Lijado. Tipos de lijas.',
        'Acabado, barnices impregnantes y lacas.'
      ],
    },
    {
      title: 'M3: Presupuestos y proyectos',
      content: [
        'Presupuesto: Cómo crear un presupuesto de manera correcta.',
        'Proyectos de carpintería: elaboración de diferentes proyectos, con planos, para aplicar los conocimientos adquiridos.'
      ],
    },
    {
      title: 'M4: Seguridad en el taller',
      content: [
        'SEGURIDAD: Cómo armar un hombre muerto para nuestro taller.',
        'Seguridad electromecánica en el taller.',
        'Cuadro eléctrico y cálculo de consumos.'
      ],
    },
    {
      title: 'M5: Herramientas de corte',
      content: [
        'Uso y mantenimiento de nuestras herramientas.',
        'Sierras de corte (circular de mano, ingletadora y sierra de banco), fresadora, caladora, cepillos, taladros: Funcionamiento, seguridad y mantenimiento.',
        'Mantenimiento de disco de corte carburados y de acero.'
      ],
    },
    {
      title: 'M6: Taladros y afilado',
      content: [
        'Mantenimiento de taladros de mano y de banco.',
        'Afilado de mechas.',
        'Fabricación de avellanadores de diferentes medidas.'
      ],
    },
    {
      title: 'M7: Mantenimiento de equipos',
      content: [
        'Mantenimiento de compresor para uso de carpintería.'
      ],
    },
    {
      title: 'M8: Pirograbado',
      content: [
        'Introducción al mundo de la pirografía.',
        'Construcción de tu propio pirógrafo.'
      ],
    },
    {
      title: 'M9: Marketing para carpinteros',
      content: [
        'MKT: ¿Qué negocio me conviene?',
        'Ventas de commodities o personalizados.',
        'Estudio de mercado, competencia, valor agregado.',
        'Cómo vender en Market place y Mercado libre.',
        'Tipos de tickets.'
      ],
    },
    {
      title: 'M10: Redes sociales para carpinteros',
      content: [
        'Cómo iniciar un negocio en redes sociales (Instagram - TikTok).',
        'Cómo crear mi primer reel - uso de CapCut.',
        'Cómo utilizar la IA para la creación de contenido.'
      ],
    },
  ];

  const faqs = [
    {
      question: '¿Cuánto tiempo tendré acceso al programa?',
      answer: 'Al ser un curso digital tienes un acceso inmediato y sin límites (no vence), puedes verlo las veces que quieras hasta aprender, sin horarios y verlo las veces que desees para lograr un aprendizaje más rápido.',
    },
    {
      question: '¿Cómo accederé al curso?',
      answer: 'El programa es en línea, el acceso se puede realizar por computadora, computadora portátil, celular o tableta.',
    },
    {
      question: '¿Cómo me inscribo?',
      answer: 'A través de WhatsApp a los números que se indican en "Informes".',
    },
    {
      question: '¿Se paga por mes?',
      answer: 'Puedes optar por pagar mensualmente o bien en un solo pago los 3 meses juntos.',
    },
  ];

  const [activeModuleIndex, setActiveModuleIndex] = useState(null);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const handleModuleClick = (index) => {
    setActiveModuleIndex(index === activeModuleIndex ? null : index);
  };

  const handleFaqClick = (index) => {
    setActiveFaqIndex(index === activeFaqIndex ? null : index);
  };

  return (
    <div className="py-10 px-5">
      <div className="max-w-7xl  mx-auto py-14 px-4 sm:px-6 lg:px-8 rounded-xl shadow-2xl bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center  ">
            ¿QUERÉS SER UN CARPINTERO DE LABORATORIO?
          </h2>
          <p className="text-lg text-center mb-10 md:mb-18">Duración: 3 meses</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-left">
              

              {/* Acordeón de módulos */}
              <div className="space-y-4 md:text-left text-center align-middle justify-center flex flex-col">
                {modules.map((module, index) => (
                  <div key={index} className="border-b w-4/5 mx-auto  border-gray-200">
                    <button
                      className=" flex justify-between items-center text-center py-4 text-left text-gray-800 hover:text-gray-900"
                      onClick={() => handleModuleClick(index)}
                    >
                      <span className="font-medium">{module.title}</span>
                      <ChevronDownIcon
                        className={`h-5 w-5 transform transition-transform duration-200 ${
                          activeModuleIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeModuleIndex === index && (
                      <ul className="list-disc list-inside text-sm pb-4">
                        {module.content.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://i.ibb.co/vv740w9/lampara-de-pie.jpg"
                alt="lampara-de-pie"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sección de preguntas frecuentes */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Preguntas frecuentes
        </h2>
        <div className="space-y-4 rounded-xl shadow-2xl p-5 bg-white">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="w-full flex justify-between items-center py-4 text-left text-gray-800 hover:text-gray-900"
                onClick={() => handleFaqClick(index)}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDownIcon
                  className={`h-5 w-5 transform transition-transform duration-200 ${
                    activeFaqIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {activeFaqIndex === index && (
                <div className="pb-4 text-left text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetallesCurso;