import React from 'react';
import Navbar from '../components/Navbar';
import OrderDeliveryTemplate from '../components/OrderDeliveryTemplate';
import {db} from '../data/firebase';

class RecordView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {selectedNavbar:'record'}
        this.changeReadyStatus= this.changeReadyStatus.bind(this);
      }


    componentDidMount() {
        db.collection("ordenes").where("record", "==", true).onSnapshot((querySnapshot)=>{
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
        <div>     
        <p>Historial</p>
              <OrderDeliveryTemplate changeReadyStatus={this.changeReadyStatus} data={data}/>    
        </div>
    </>)
    }
}

export default RecordView;