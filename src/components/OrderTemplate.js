import React from 'react';
class OrderTemplate extends React.Component{
    // constructor(props) {
    //     super(props);
        
    //   }

    render(){
     
     return (
            <div>
                <label>
                Cliente:
                <p>{this.props.client}</p>
                </label>
                <p> {this.props.name} ${this.props.value} </p>
                <div>
                <p>HORA DE INGRESO: {this.props.time} <button>LISTO</button></p> 
                </div>
            </div>
        )

    }
}

export default OrderTemplate;