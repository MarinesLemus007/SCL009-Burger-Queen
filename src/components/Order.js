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
        <div className="card border-primary ">
          
          <div class="card-body">
          ORDEN
          {this.props.list.map(element=><OrderElement name={element.name} value={element.value} key={element.id} id={element.id} delete={this.props.delete}/>)}
          <h5 class="card-title">Total ${this.total()}</h5>
        </div>
        </div>      
      )
    }
}

export default Order;