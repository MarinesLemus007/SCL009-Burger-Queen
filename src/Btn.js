import React from 'react';
import './App.css';
import Menu from './data/menu.json'


class Btn extends React.Component{
    constructor(props) {
        super(props);
        this.prueba = this.prueba.bind(this);
      }
      prueba() {
        console.log(this.props.value);
      }

    render(){
       return <button onClick={this.prueba} className='btn'>{this.props.name}</button>
    }
}

export default Btn;