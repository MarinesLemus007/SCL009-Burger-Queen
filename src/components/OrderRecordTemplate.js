import React from 'react';
class OrderRecordTemplate extends React.Component{
 
   render(){
    return (
         this.props.data !== undefined ? this.props.data.map(el=>
            
            <div className='order-record' key={el.data.id}>
               
         
                <p>{"Fecha :  "+new Date(el.data.time).toLocaleDateString()}</p>
                <p>{"Hora de pedido : "+new Date(el.data.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                <p>{"Tiempo en cocina : "+new Date(el.data.time_ready - el.data.time).getMinutes()+" min" }</p>
                <p>{"Entregado a las : "+new Date(el.data.time_delivered).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                <p>{"Cliente : "+el.data.client}</p>
                {el.data.list.map(e=> 
                 <p key={e.name+e.id}>{e.count+"  x  "+e.name}</p> )}
                
            </div> 
            ):<p></p> 

       )
   }
}
export default OrderRecordTemplate;