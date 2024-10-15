import React from 'react'

const ejercicio7 = (props: any) => {
    const mostrarHora = () => {
        alert(new Date());
    }
  return (
    <div>
        <h1> Pulsar en el botón para ver la hora</h1> 
        <button onClick={mostrarHora}>Pulsar</button>
    </div>
  );
}

export default ejercicio7;