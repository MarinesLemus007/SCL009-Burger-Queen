import React from 'react';
class OrderTemplate extends React.Component{
   render(){
    return (
         this.props.data !== undefined ? this.props.data.map(el=>
            el.data.not_ready && 
            
            <div className='order-kitchen'>
                <p>cliente : {el.data.client}</p>
                {el.data.list.map(e=> <p>{e.name}</p>)}
                <button onClick={()=>this.props.changeReadyStatus(el.data.id)}>Listo</button>
                
            
            </div> 
        
            ) : <p></p>

       )
   }
}
export default OrderTemplate;


