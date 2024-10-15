import React, { useState } from "react";

type Props = {};

const Ejercicio10 = (props: Props) => { // Cambiado a Ejercicio10
  const [contador, setContador] = useState(0);
  const [arrayNum, setArrayNum] = useState<number[]>([]);

  function generarAleatorio() {
    const num = Math.floor(Math.random() * 100);
    setArrayNum([...arrayNum, num]);
    setContador(contador + 1);
  }

  return (
    <div>
      <p>
        Contador: {contador} <br />
        {JSON.stringify(arrayNum)}
      </p>
      <button onClick={generarAleatorio}>Generar Número Aleatorio</button>
    </div>
  );
};

export default Ejercicio10;
