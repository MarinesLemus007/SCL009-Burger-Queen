import React from 'react';
import Navbar from './navbar';
import {db} from './data/firebase';
import OrderTemplate from './components/OrderTemplate'

class KitchenView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
       
      }


    componentDidMount() {
        db.collection("ordenes").orderBy("time","asc").limit(5).onSnapshot((querySnapshot)=>{
           this.setState({
                data: querySnapshot.docs.map(doc =>{
                   
                    return {data: doc.data()}
                })
            })
               
        });
          
    }

    render(){
        const {data} = this.state;
     
        return (
            <>
            <Navbar/>
       
        <div>
        <OrderTemplate data={data}/>
        </div>
    </>)
    }
}

export default KitchenView;