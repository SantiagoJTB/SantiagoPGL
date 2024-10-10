import React, { useState } from 'react'

type Props = {}

const App = (props: Props) => {

  const [miArrayNum, setArrayNum] = useState<number[]>([]);

  function addNumber(){
    const num = Math.floor(Math.random() * 100);
    const arr = [...miArrayNum, num];
    setArrayNum(arr);
  }

  return (
    <div>
      <p>{JSON.stringify(miArrayNum)}</p>
      <button onClick={addNumber}>Generar numero</button>
    </div>
  )
}

export default App