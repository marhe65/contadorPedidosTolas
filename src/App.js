import './App.css';
import logoTolas from './images/Logo-Las-Tolas.png'

function App() {
  return (
    <div className="App">
      <div className='tolas-logo-contenedor'>
        <img className='tolas-logo'
        src={logoTolas}
        alt='Logo de las Tolas' />
      </div>
    </div>
  );
}

export default App;
