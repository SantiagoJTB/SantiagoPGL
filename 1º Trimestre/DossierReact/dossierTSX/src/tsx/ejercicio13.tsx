import React, { useState } from 'react';

type Moneda = {
  nombre: string;
  pais: string;
};

const ListaMonedas = () => {
  const [monedas, setMonedas] = useState<Array<Moneda>>([]);

  function addMoneda() {
    const moneda: Moneda = { nombre: "libra", pais: "UK" }; 
    setMonedas([...monedas, moneda]);
  }

  return (
    <>
      <h3>Cliente de monedas</h3>
      <div>
        <button onClick={addMoneda}>Agregar moneda</button>
        <h4>Monedas: </h4>
        <ul>
          {monedas.map((m: Moneda, index: number) => {
            return (
              <li key={index}> 
                {m.nombre} de {m.pais} 
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ListaMonedas;
