import React from 'react';
class OrderElement extends React.Component{
    // constructor(props) {
    //     super(props);
        
    //   }


    render(){
      return (<div className='order-element'>
          <p>{this.props.count} {this.props.name} ${this.props.value} <button className="btn-delete" onClick={() => this.props.delete(this.props.id)}>X</button></p>
      </div>)
    }
}

export default OrderElement;