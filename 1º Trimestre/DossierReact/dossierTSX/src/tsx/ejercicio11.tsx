import React, { useState } from 'react'

const Ejercicio11 = () => {
  const [horactual, sethoraactual] = useState("");
  let dato = 1;

  function actualizar(){
    Ejercicio11.atributoestatico++;
    dato++;
    console.log("Estatico: "+Ejercicio11.atributoestatico);
    console.log("dato:"+dato);
    sethoraactual(""+new Date());
  }
    return (
    <div>
        <h4>Ejercicio11</h4>
        <p>Info en estatico: {Ejercicio11.atributoestatico}</p>
        <button onClick = {actualizar}>Actualizar</button>
    </div>
  )
}
Ejercicio11.atributoestatico = 2;
export default Ejercicio11