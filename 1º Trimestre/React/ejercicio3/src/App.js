import logo from './logo.svg';
import './App.css';

const ComponenteApp = () => {
      const midatos = {
        nombre: 'Santiago',
        apellido: 'Torres',
        curso: '2ºDAM'
      };
      return (
      <>
      <h1>Mis datos: </h1>
      <h4>{JSON.stringify(midatos)}</h4>
      </>
      );
      }
    


export default ComponenteApp;
