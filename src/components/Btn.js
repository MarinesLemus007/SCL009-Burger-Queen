import React from 'react';

class Btn extends React.Component{
   
    render(){
      return <button className= "BtnMenu" onClick={() => this.props.add(this.props.value,this.props.name)}>{this.props.name}</button>
    }
}

export default Btn;