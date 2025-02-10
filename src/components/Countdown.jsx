import React, { useState, useEffect } from 'react';

function Countdown() {
  const targetDate = new Date('2025-02-01T00:00:00'); // Fecha de inicio del curso

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000); // Actualizar cada segundo

    return () => clearInterval(timer); // Limpiar el intervalo al desmontar
  }, []);

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <div className="py-10">
      <div className="countdown-container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-4">¡El curso comienza en:</h2>
        <div className="countdown-grid grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 font-bold mt-10">
          <div className="countdown-item bg-white py-5 px-4 sm:py-5 rounded-2xl shadow-2xl flex flex-col items-center">
            <span className="countdown-number text-3xl sm:text-5xl">{timeLeft.days}</span>
            <span className="countdown-label text-sm sm:text-base">días</span>
          </div>
          <div className="countdown-item bg-white py-5 px-4 sm:py-5 rounded-2xl shadow-2xl flex flex-col items-center">
            <span className="countdown-number text-3xl sm:text-5xl">{timeLeft.hours}</span>
            <span className="countdown-label text-sm sm:text-base">horas</span>
          </div>
          <div className="countdown-item bg-white py-5 px-4 sm:py-5 rounded-2xl shadow-2xl flex flex-col items-center">
            <span className="countdown-number text-3xl sm:text-5xl">{timeLeft.minutes}</span>
            <span className="countdown-label text-sm sm:text-base">minutos</span>
          </div>
          <div className="countdown-item bg-white py-5 px-4 sm:py-5 rounded-2xl shadow-2xl flex flex-col items-center">
            <span className="countdown-number text-3xl sm:text-5xl">{timeLeft.seconds}</span>
            <span className="countdown-label text-sm sm:text-base">segundos</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;