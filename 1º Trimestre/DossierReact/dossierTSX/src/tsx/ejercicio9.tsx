import React, { useState } from "react";
type Props = {}

const Ejercicio9 = (props: Props) => {
    const[contador, setContador] = useState(0);
    let num = 2;
    
    return (
    <div>
        <p>{num}*{contador}={num*contador} </p>
        <button onClick={()=> setContador(contador+1)}>
            {num}*{contador}
        </button>
    </div>
  )
}

export default Ejercicio9;