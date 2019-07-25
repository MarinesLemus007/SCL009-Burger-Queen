import React from 'react';
class OrderDeliveryTemplate extends React.Component{
   render(){
    return (
         this.props.data !== undefined ? this.props.data.map(el=>
            
            
            <div className='order-kitchen' key={el.data.id}>
                <p>Cliente : {el.data.client}</p>
                <p>Fecha :  {new Date(el.data.time).toLocaleDateString()} {new Date(el.data.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                <p>Tiempo que tomo el pedido : {new Date(el.data.time_ready).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }</p>
                {el.data.list.map(e=> 
                 <p key={e.name+e.id}>{e.count} x {e.name}</p> )}
                <div className='template-order'>
                    <button className='btn-order-template' onClick={()=>this.props.changeReadyStatus(el.data.id)}>Entregado</button>
                </div>
            </div> 
        
            ):<p></p> 

       )
   }
}
export default OrderDeliveryTemplate;