import React, { useEffect, useState } from 'react';

type Props = {
  zona: string;
};

export const Reloj: React.FC<Props> = ({ zona }) => {
  const [hora, setHora] = useState('');

  useEffect(() => {
    const actualizarHora = () => {
      const fecha = new Date().toLocaleString("es-ES", { timeZone: zona });
      setHora(fecha);
    };

    const intervalo = setInterval(actualizarHora, 1000); // Actualiza cada segundo
    actualizarHora(); // Para inicializar la hora inmediatamente

    return () => clearInterval(intervalo); // Limpiar el intervalo al desmontar
  }, [zona]);

  return (
    <div>
      <h2>Hora en {zona}:</h2>
      <p>{hora}</p>
    </div>
  );
};
