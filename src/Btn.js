import React from 'react';
import './App.css';



class Btn extends React.Component{
    constructor(props) {
        super(props);
       
      }


    render(){
      return <li><button onClick={() => this.props.add(this.props.value,this.props.name)} className='btn'>{this.props.name}</button></li>
    }
}

export default Btn;