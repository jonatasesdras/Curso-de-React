import React from 'react';

class App extends React.Component {

  state = {
    nome: ''
  }

  constructor() {
    super()
    this.modificarNome = this.modificarNome.bind(this)
  }

  modificarNome(event) {
    this.setState({
      nome: event.target.value
    })
  }

  criaComboBox = () => {
    const opcoes = ["Jonatas", "Esdras"]
    const comboBoxOpcoes = opcoes.map(opcao => <option>{opcao}</option>)

    return (
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  render() {
    const MeuComboBox = () => this.criaComboBox()
    
    return (
      <>
        <input type="text" value={this.state.nome} onChange={this.modificarNome} />
        <h1>Olá {this.state.nome}</h1>
        <MeuComboBox />
      </>
    )
  }
}

export default App;
