import React from 'react';
import Navbar from '../components/Navbar';
import OrderRecordTemplate from '../components/OrderRecordTemplate';
import {db} from '../data/firebase';

class RecordView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {selectedNavbar:'record'}
       
      }


    componentDidMount() {
        db.collection("ordenes").where("record", "==", true).orderBy("time","desc").onSnapshot((querySnapshot)=>{
            this.setState({
                data: querySnapshot.docs.map(doc =>{       
                    return {data: doc.data()}
                })
            })
        })
    }



    render(){
        const {data} = this.state;
     
        return (
            <>
            <Navbar state={this.state.selectedNavbar}/>
       
            <div className='order-record-container'>
                <h4>HISTORIAL</h4>
                <OrderRecordTemplate data={data}/>
            </div>
            </>
        )
    }
}

export default RecordView;