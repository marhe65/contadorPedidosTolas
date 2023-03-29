import './App.css';
import Boton from './componentes/Boton';
import logoTolas from './images/Logo-Las-Tolas.png'

function App() {

  const manejarClic = () => {
    console.log('Clic');
  }

  const reiniciarContador = () => {
    console.log('Reiniciar');
  }
  return (
    <div className="App">
      <div className='tolas-logo-contenedor'>
        <img className='tolas-logo'
        src={logoTolas}
        alt='Logo de las Tolas' />
      </div>
      <div className='contenedor-principal'>
        <Boton texto='Clic' esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton texto='Reiniciar' esBotonDeClic={false} manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
