import React from 'react'

type Props = {

  num1?:number;
  num2?:number;
}

const ejercicio5 = (props: Props) => {
  const {num1 = 0, num2 = 0 } = props;
  let resultado = num1+num2;
  return (
    <div>{num1}+{num2}={resultado}</div>
  )
}

export default ejercicio5