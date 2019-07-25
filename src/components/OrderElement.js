import React from 'react';
class OrderElement extends React.Component{

    render(){
      return (
        <div className='order-element-row'>
        <div className='order-element-count-col'>
            <p>{this.props.count}</p>
        </div> 
        <div className='order-element-name-col'>
          <p>{this.props.name} </p>
        </div>
        <div className='order-element-value-col'>
        <p>${this.props.value}</p>
        </div>
        <div className='order-element-btn-col'>
        <button className="btn-delete" onClick={() => this.props.delete(this.props.id)}>X</button>
        </div>
       
        </div>
      )
    }
}

export default OrderElement;