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
        db.collection("ordenes").where("record", "==", true).onSnapshot((querySnapshot)=>{
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
       
        <div>
        
        <p>Historial</p>
              <OrderRecordTemplate data={data}/>
        
        
        
        </div>
    </>)
    }
}

export default RecordView;