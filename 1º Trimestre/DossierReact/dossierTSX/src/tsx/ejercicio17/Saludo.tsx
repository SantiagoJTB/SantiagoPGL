// Saludo.tsx
import React from 'react';

type Props = {
  fecha: string;
};

const Saludo: React.FC<Props> = ({ fecha }) => {
  return (
    <div>
      <h2>¡Hola!</h2>
      <p>La fecha y hora actual es: {fecha}</p>
    </div>
  );
};

export default Saludo;
