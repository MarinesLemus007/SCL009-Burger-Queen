import React from 'react';
import OrderElement from './OrderElement';

class Order extends React.Component{
    constructor(props) {
        super(props);
        this.total = this.total.bind(this);
      }
    total(){
       return this.props.list.reduce(function(valorAnterior, valorActual){
            return valorAnterior + valorActual.value;
    },0)}

    render(){
        
      return  (
        <div>
          {this.props.list.map(element=><OrderElement name={element.name} value={element.value} key={element.id} id={element.id} delete={this.props.delete}/>)}
          <p>Total ${this.total()}</p>
        </div>
      
      )
    }
}

export default Order;