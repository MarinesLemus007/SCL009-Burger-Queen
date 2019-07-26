import React from 'react';
import Navbar from '../components/Navbar';
import OrderDeliveryTemplate from '../components/OrderDeliveryTemplate';
import {db} from '../data/firebase';

class OrdersReadyView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {selectedNavbar:'ordersReady'}
        this.changeReadyStatus= this.changeReadyStatus.bind(this);
      }


    componentDidMount() {
        db.collection("ordenes").where("not_delivered", "==", true).orderBy("time","asc").onSnapshot((querySnapshot)=>{
            this.setState({
                data: querySnapshot.docs.map(doc =>{       
                    return {data: doc.data()}
                })
            })
        })
    }

    changeReadyStatus(id) {
        this.state.data.forEach(el=> {
            if (el.data.id === id){
                db.collection("ordenes").doc(id).update({
                    not_delivered: false,
                    record: true,
                    time_delivered:Date.now(),
                })
            }
        })
    }

    render(){
        const {data} = this.state;
     
        return (
            <>
            <Navbar state={this.state.selectedNavbar}/>
            <div className='order-ready-container'>
                <h4>PEDIDOS LISTOS PARA ENTREGAR</h4>
                <OrderDeliveryTemplate changeReadyStatus={this.changeReadyStatus} data={data}/>
            </div>
            </>
        )
    }
}

export default OrdersReadyView;