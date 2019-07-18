import React from 'react';
import './App.css';
import Menu from './data/menu.json'


class Btn extends React.Component{
    constructor(props) {
        super(props);
        this.prueba = this.prueba.bind(this);
      }
      prueba() {
        alert(this.props.value)
      }
         render(){
       return <button className="btn btn-danger" onClick={this.prueba}>{this.props.name}</button>
    }
}

export default Btn;