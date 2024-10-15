import React from 'react';
import { Reloj } from './Reloj'; // Asegúrate de que la ruta sea correcta

const Ejercicio16 = () => {
  const zonasHorarias = [
    'Europe/London',  // Londres
    'Europe/Madrid',   // Madrid
    'America/New_York', // Nueva York
    'Asia/Tokyo',      // Tokio
    'Australia/Sydney' // Sídney
  ];

  return (
    <div>
      <h1>Relojes por Zona Horaria</h1>
      {zonasHorarias.map((zona, index) => (
        <Reloj key={index} zona={zona} />
      ))}
    </div>
  );
};

export default Ejercicio16;
