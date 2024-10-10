import React from 'react'
import './App.css';

type Props = {nums: number[] }

const ejercicio1 = (props: Props) => {

  let arr = [1,2,3,4,5,6,7,8,9,10];

  function tablaMultiplicacion() {
    for (let i = 0; i < arr.length; i++){
      let valor = arr[i];
      return <div key={i}>{valor} * {i} = {valor * i}</div>
    }
  }
  return (
    tablaMultiplicacion()
    )
}
export default ejercicio1;

