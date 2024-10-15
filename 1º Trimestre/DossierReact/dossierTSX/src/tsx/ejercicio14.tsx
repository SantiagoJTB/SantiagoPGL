import React from 'react';

// Componente PracticarTabla que recibe la prop 'tabla'
const PracticarTabla = ({ tabla }: { tabla: number }) => {
  return (
    <div>
      <h3>Tabla del {tabla}</h3>
      <ul>
        {/* Generar los multiplicadores del 1 al 10 */}
        {Array.from({ length: 10 }, (_, i) => (
          <li key={i}>
            {tabla} x {i + 1} = {tabla * (i + 1)}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Componente TodasLasTablas que muestra las tablas del 2 al 10
const TodasLasTablas = () => {
  const numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <h2>Tablas de multiplicar del 2 al 10</h2>
      <div className="grid">
        {/* Usar map para iterar sobre el array y generar las tablas */}
        {numeros.map((numero, index) => (
          <PracticarTabla key={index} tabla={numero} />
        ))}
      </div>
    </div>
  );
};

export default TodasLasTablas;
