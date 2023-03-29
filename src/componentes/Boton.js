import React from "react";
import '../stylesheets/Boton.css';

function Boton({ texto, esBotonDeClic, manejarClic }) {/*aplicando la desestructuración evitamos usar props y usamos directamente
el valor del parametro en el botón */
  return(
    /*el className del botón depende de la función a realizar, si es de clic o de reinicio, entonces 
    en los parametros agregamos esBotonDeClic y usamos un operador ternario*/
    /*si el boton es clic => la clase es boton-clic, si no boton-reiniciar */
    <button className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
            onClick={manejarClic}>
      {texto}
    </button>
    /*manejarClic es una función como props y se asigna al eventListener onClick*/
  );  
}

export default Boton;