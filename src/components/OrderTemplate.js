import React from 'react';
class OrderTemplate extends React.Component{
   render(){
    return (
        this.props.data && this.props.data !== undefined ? this.props.data.map(el=>
            <div className='order-kitchen'> <p>cliente : {el.data.client}</p>
                {el.data.list.map(e=>
                <p>{e.name}</p>)}
           
            </div>) : <p></p>

       )
   }
}
export default OrderTemplate;


