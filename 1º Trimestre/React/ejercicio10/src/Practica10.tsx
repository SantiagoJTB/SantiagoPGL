import React from 'react'

type Props = {}

const Practica10 = (props: Props) => {


  const [numeros, setNumeros] = React.useState([]);
  function elmetodo(){
    let dato = Math.trunc(Math.random()*10);
    setNumeros([...numeros, dato]);
  }
  return (
    <div>{JSON.stringify(numeros)}
    <button onClick={elmetodo}></button>
    </div>

  )
}

export default Practica10