import React, { Component } from 'react';
import './estilo.css';

class FormularioDeNotas extends Component {
  
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }
  
  _handleTitle(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }
  
  _criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }

  render(){
    return (
      <form className="form-cadastro" 
        onSubmit={this._criarNota.bind(this)}>
        
        <input 
        className="form-cadastro_input" 
        type="text" 
        placeholder="Nomeia sua nota"
        onChange={this._handleTitle.bind(this)}
        />
        
        <textarea 
        rows="15" 
        placeholder="Escreva sua anotação"
        className="form-cadastro_input"
        onChange={this._handleTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">Salvar nota</button>
      </form>
    )
  };
}

export default FormularioDeNotas;