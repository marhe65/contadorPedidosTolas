import './App.css';
import Boton from './componentes/Boton';
import logoTolas from './images/Logo-Las-Tolas.png';
import Contador from "./componentes/Contador";
/*debemos importar el Hook useState para dar un estado inicial al componente funcional */
import { useState  } from "react";

function App() {
/*creamos una cte que es un array con 2 elementos, el primero es el valor que queremos usar como
el estado y luego una función que nos vá a permitir actualizar dicho valor...los nombres los colocamos nos,
colocamos set(asignar) y el nombre del estado que hayamos determinado */
  const [numClics, setNumClics] = useState(0);/*cero es el valor inicial del estado */

  const manejarClic = () => {
    //console.log('Clic');
    setNumClics(numClics + 1);
  };
  const reiniciarContador = () => {
    //console.log('Reiniciar');
    setNumClics(0);
  };
  return (
    <div className="App">
      <div className='tolas-logo-contenedor'>
        <img className='tolas-logo'
        src={logoTolas}
        alt='Logo de las Tolas' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={ numClics } />
        <Boton texto='Clic' esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton texto='Reiniciar' esBotonDeClic={false} manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
