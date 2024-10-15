// App.tsx
import React, { useState } from 'react';
import NumerosAleatorios from './NumerosAleatorios';
import Saludo from './Saludo';

const Ejercicio17 = () => {
  const [mostrarNumeros, setMostrarNumeros] = useState(true);

  const handleMostrarNumeros = () => {
    setMostrarNumeros(true);
  };

  const handleMostrarSaludo = () => {
    setMostrarNumeros(false);
  };

  return (
    <div>
      <h1>Componente con Botones</h1>
      <button onClick={handleMostrarNumeros}>Mostrar Números Aleatorios</button>
      <button onClick={handleMostrarSaludo}>Mostrar Saludo y Fecha</button>
      
      {mostrarNumeros ? <NumerosAleatorios /> : <Saludo fecha={new Date().toLocaleString()} />}
    </div>
  );
};

export default Ejercicio17;
