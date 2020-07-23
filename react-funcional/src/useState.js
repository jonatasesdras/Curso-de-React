import React, { useState } from 'react';

function UseState() {
  
  const [ numero, setNumero ] = useState()
  const [ segundoNumero, setSegundoNumero] = useState()
  const [ resultado, setResultado ] = useState();

  const somar = () => {
    const num1Convertido = parseInt(numero)
    const num2Convertido = parseInt(segundoNumero)

    setResultado( num1Convertido + num2Convertido)
  }

  //forma alternativa 
  // const [ state, setState] = useState({
  //   numero: 0,
  //   segundoNumero: 0,
  //   resultado: 0
  // })

  
  return (
    <div>
      Número 1:<br />
      <input type="text" 
            value={numero}
            onChange={e => setNumero(e.target.value)} /><br />
      Número 2:<br />
      <input type="text" 
            value={segundoNumero} 
            onChange={e => setSegundoNumero(e.target.value)}/><br />
      Resultado:<br />
      <button onClick={somar}>Somar</button><br/>
      <input type="text" value={resultado} /><br />
    </div>
  );
}

export default UseState;
