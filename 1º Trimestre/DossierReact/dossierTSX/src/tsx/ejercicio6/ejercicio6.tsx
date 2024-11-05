import React from 'react'
import { Reloj } from './Reloj'

type Props = {}

const ejercicio6 = (props: Props) => {
  return (
    <> 
    <h1>Actividad react: Relojes mundiales</h1> 
    <Reloj zona="Europe/Madrid" /> 
    <Reloj zona="America/New_York" /> 
    <Reloj zona="Europe/London" /> 
    </>
  )
}

export default ejercicio6