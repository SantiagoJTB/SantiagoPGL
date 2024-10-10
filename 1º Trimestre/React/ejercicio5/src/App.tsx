import React from 'react'

type Props = {
  num1?: number;
  num2?: number;
  }
  const ComponenteTS = (props: Props) => {
  return (
  <div>{props.num1}+{props.num2} = {num1+num2}</div>
  )
  }
  export default ComponenteTS