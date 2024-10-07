import React, { useState } from 'react';
import './App.css';

function GenerarAleatorio() {

  const [contador, incrementar] = useState(0);
  let numAleatorio = Math.floor(Math.random() * 100) + 1;
  let array = new Array;
  
  document.addEventListener("onclick", () =>{
    incrementar(contador + 1);
    array.push(numAleatorio);
    JSON.stringify(array);
  });

};

export default GenerarAleatorio;
