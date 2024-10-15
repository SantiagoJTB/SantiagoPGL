import React, { useState } from 'react';
import './styles.css';

const CambiarColor = () => {
  const [claseAplicada, setClaseAplicada] = useState('');

  const cambiarColor = (color: string) => {
    setClaseAplicada(color);
  };

  return (
    <div>
      <h3>Selecciona un color:</h3>
      <button onClick={() => cambiarColor('rojo')}>Rojo</button>
      <button onClick={() => cambiarColor('verde')}>Verde</button>
      <button onClick={() => cambiarColor('azul')}>Azul</button>
      <button onClick={() => cambiarColor('amarillo')}>Amarillo</button>

      <h4 className={claseAplicada}>
        Este área muestra los resultados de los botones
      </h4>
    </div>
  );
};

export default CambiarColor;
