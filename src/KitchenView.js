import React from 'react';
import Navbar from './navbar';
import {db} from './data/firebase';

class KitchenView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
       
      }


    componentDidMount() {
        db.collection("ordenes").onSnapshot((querySnapshot)=>{
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
        {data && data !== undefined ? data.map(el=>
        <div>
            {el.data.list.map(e=>
            <p>{e.name} {e.value}</p>)}
        <p>cliente : {el.data.client}</p>
        <p>su pedido es </p>
        </div>) : <p>error</p>}
           "oli"
        </div>
    </>)
    }
}

export default KitchenView;