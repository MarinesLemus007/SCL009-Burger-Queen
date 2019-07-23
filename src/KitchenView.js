import React from 'react';
import Navbar from './navbar';
import OrderTemplate from './components/OrderTemplate';
import {db} from './data/firebase';

class KitchenView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
       
      }


    componentDidMount() {
        db.collection("ordenes").get().then(querySnapshot => {
           this.setState({
                data: querySnapshot.docs.map(doc =>{
                   
                    return {data: doc.data()}
                })
            })
               
        });
          
    }

    render(){
        const {data} = this.state;
     console.log(data);
        return (
            <>
                <Navbar/>
                {data && data !== undefined ?
                data.map(el=> el.data.list.map(e=>
                <OrderTemplate client={el.data.client} name={e.name} value={e.value} time={el.data.time}/>))
                : <p>error</p>}
            </>
        )    
    }
}

export default KitchenView;