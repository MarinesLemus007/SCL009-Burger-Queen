import React from 'react';
class OrderElement extends React.Component{
    // constructor(props) {
    //     super(props);
        
    //   }


    render(){
<<<<<<< HEAD
      return (<div className='hola'>
          <p>{this.props.name} {this.props.value}</p>
          <button className='delete' onClick={() => this.props.delete(this.props.id)}>X</button>
=======
      return (<div>
          <p>{this.props.name} {this.props.value} <button className="buttonDelete" onClick={() => this.props.delete(this.props.id)}>X</button></p>
>>>>>>> e26d6f6eb57c994f68b3aa5f2ce0cebabdad261a
      </div>)
    }
}

export default OrderElement;