import React from 'react';
class OrderTemplate extends React.Component{
   render(){
    return (
         this.props.data !== undefined ? this.props.data.map(el=>
            el.data.not_ready && 
            
            <div className='order-kitchen' key={el.data.id}>
                <p>Cliente : {el.data.client}</p>
                <p>Fecha :  {new Date(el.data.time).toLocaleDateString()} {new Date(el.data.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                {el.data.list.map(e=> 
                 <p key={e.name+e.id}>{e.count} x {e.name}</p> )}
                <div className='template-order'>
                    <button className='btn-order-template' onClick={()=>this.props.changeReadyStatus(el.data.id)}>Listo</button>
                </div>
            </div> 
        
            ) : <p></p>

       )
   }
}
export default OrderTemplate;


