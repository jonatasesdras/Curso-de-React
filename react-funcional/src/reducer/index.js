import React, { useState } from 'react';

import useStore from './somaReducer'

function ReducerHook() {
  
  const [ numero, setNumero ] = useState('')
  const [ segundoNumero, setSegundoNumero] = useState('')

  const [store, dispatch] = useStore()

  const somar = () => {
    const num1Convertido = parseInt(numero)
    const num2Convertido = parseInt(segundoNumero)

    console.log('dispachando a action ')

    dispatch({
        type: 'SOMA',
        payload: num1Convertido + num2Convertido
    })
  }

  const subtrair = () => {
    const num1Convertido = parseInt(numero)
    const num2Convertido = parseInt(segundoNumero)

    dispatch({
        type: 'SUBTRACAO',
        payload: num1Convertido - num2Convertido
    })
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
      <button onClick={subtrair}>Subtrair</button><br/>
      <input type="text" value={store.resultado} readOnly/><br />
    </div>
  );
}

export default ReducerHook;
