import React from 'react';
import Navbar from '../components/Navbar';
import OrderTemplate from '../components/OrderTemplate';
import {db} from '../data/firebase';


class KitchenView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {selectedNavbar:'kitchen'}
       this.changeReadyStatus= this.changeReadyStatus.bind(this);
      }


    componentDidMount() {
        db.collection("ordenes").where("not_ready", "==", true).orderBy("time","asc").limit(6).onSnapshot((querySnapshot)=>{
           this.setState({
                data: querySnapshot.docs.map(doc =>{
                   
                    return {data: doc.data()}
                })
            })
               
        });
          
    }

    changeReadyStatus(id) {
        this.state.data.forEach(el=> {
            if (el.data.id === id){
                db.collection("ordenes").doc(id).update({
                    not_ready: false
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
                <p>ORDENES</p>
                <OrderTemplate changeReadyStatus={this.changeReadyStatus} data={data}/>
            </div>
            </>
        )
    }
}

export default KitchenView;