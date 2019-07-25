import React from 'react';

class Btn extends React.Component{
   
    render(){
      return <button className= "btn-item" onClick={() => this.props.add(this.props.value,this.props.name)}>{this.props.name.toUpperCase()}</button>
    }
}

export default Btn;