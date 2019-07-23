import React from 'react';
import {db} from './data/firebase';
import './index.css';
import Navbar from './navbar';
import Btn from './components/Btn'
import Menu from './data/menu.json'
import Order from './components/Order';
import OrderName from './components/OrderName';
import CategoryBtn from './components/CategoryBtn'
import LunchBtn from './components/LunchBtn'


class MenuView extends React.Component{
  
  constructor(props){
    super(props)
   
    this.state = {list: [],category:null, client:""};
    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
    this.view = this.view.bind(this);
    this.changeClient = this.changeClient.bind(this)
    this.clearOrder = this.clearOrder.bind(this);
    this.saveOrder = this.saveOrder.bind(this);
    this.index = 0; // id de cada elemento de orden creado
  }
  
  //añade un producto({name,value,id} a la orden(list -> array de objetos [el index comienza en 0 y se utiliza como id]
  add(valueToAdd,nameToAdd){
    this.setState({list: this.state.list.concat([{name : nameToAdd, value:valueToAdd, id:this.index}])});
    this.index ++;
  }

  //
  delete(id){
    let newList = [...this.state.list] //crea copia de list para no cambiar directamente el estado de un componente
    for( var i = 0; i < newList.length; i++){ //recorre la newList y consigue la id de cada elemento,si coincide
      if ( newList[i].id === id) { //con la misma id que se le pasa borra este elemento (desde posicion i, elimina 1 elemento)
        newList.splice(i, 1); 
      }
    }
   this.setState({list:newList}) //remplaza la list con la newList modificada
  }

  view(category){ // dependiendo de la categoria cambia el estado, este metodo se pasa como propiedad al boton
    category = category.toLowerCase()
    
    if(category ==="desayunos"){
      this.setState({
        desayunos:true,
        almuerzos:false
      })
    }
    if(category ==="almuerzos"){
      this.setState({
        desayunos:false,
        almuerzos:true
      })
    }
  }

  changeClient(el){
    this.setState({
        client: el.target.value
    })
}

clearOrder(){
  this.setState({
    list: [],
    client:""
  })

}

saveOrder(){

let idClient =this.state.client + Date.now();

  let data=
  {
  id: idClient,
  client: this.state.client,
  list: this.state.list,
  not_ready: true,
  not_deliveded: true,
  time: Date.now() 
  }

  db.collection("ordenes").doc(idClient).set(data)
  
  .then(() => {
      this.clearOrder();
   })

}

  render(){
    return (
      <>
        <Navbar/>
          <div className="content-row">
            <section className="button-content-col">
              <div className="category-btn-row">
                {Object.keys(Menu).map(btn=> <CategoryBtn name={btn.toUpperCase()} view={this.view} key={btn}/>)}
              </div>
                {this.state.desayunos &&
                  <div className="item-btn-row"> {Menu.Desayunos.map(btn=><Btn name={btn.name} value={btn.value} add={this.add} key={btn.name}/>)}
                  </div> }
                {this.state.almuerzos && <LunchBtn add={this.add}/>}  
            </section>  
            <aside className="side-content-col">
            <div className="footer-content">
              <div className="line-order">
                <p>ORDEN</p>
              </div>
              <OrderName changeClient={this.changeClient} client={this.state.client}/>
              <div className="order-content">
                <Order list = {this.state.list} delete={this.delete}/>
              </div>
              <footer className="footer-side">
                <div className="btn-clear-col">
                  <button className="btn-aside-clear" onClick={this.clearOrder}>LIMPIAR</button>
                </div>
                <div className="btn-send-col">
                  <button className="btn-aside" onClick={this.saveOrder}>ENVIAR </button>
                </div>
                
              </footer>
              </div>
            </aside>
          </div>
      </>
    )
  }
}

export default MenuView;

