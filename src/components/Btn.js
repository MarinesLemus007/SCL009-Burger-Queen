import React from 'react';

class Btn extends React.Component{
    constructor(props) {
        super(props);
       
      }


    render(){
      return <button onClick={() => this.props.add(this.props.value,this.props.name)}>{this.props.name}</button>
    }
}

export default Btn;