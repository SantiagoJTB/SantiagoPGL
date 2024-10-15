import React, { useState } from 'react';

const Ejercicio12 = () => {
  const [colorElegido, setColorElegido] = useState("");

  const eligeColor = (color: string) => {
    setColorElegido(`Has elegido el color ${color}`);
  };

  return (
    <div>
      <h3>Realizando selecciones de color:</h3>

      <p>
        <button onClick={() => eligeColor("verde")}>Verde</button>
        <button onClick={() => eligeColor("azul")}>Azul</button>
      </p>

      <p>{colorElegido}</p>
    </div>
  );
};

export default Ejercicio12;
