import React from 'react';
class OrderElement extends React.Component{
    // constructor(props) {
    //     super(props);
        
    //   }


    render(){
      return (<div className='hola'>
          <p>{this.props.name} {this.props.value}</p>
          <button className='delete' onClick={() => this.props.delete(this.props.id)}>X</button>
      </div>)
    }
}

export default OrderElement;