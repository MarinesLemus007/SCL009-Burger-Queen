import React from 'react';
import {db} from '../data/firebase';
import '../index.css';
import Navbar from '../components/Navbar';
import Btn from '../components/Btn'
import Menu from '../data/menu.json'
import Order from '../components/Order';
import OrderName from '../components/OrderName';
import CategoryBtn from '../components/CategoryBtn'
import LunchBtn from '../components/LunchBtn'


class MenuView extends React.Component{
  
  constructor(props){
    super(props)
   
    this.state = {list: [], client:"",selectedNavbar:'menu',errorMsg:''};
    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
    this.view = this.view.bind(this);
    this.changeClient = this.changeClient.bind(this)
    this.clearOrder = this.clearOrder.bind(this);
    this.saveOrder = this.saveOrder.bind(this);
    this.addCheeseorEgg = this.addCheeseorEgg.bind(this);
    this.index = 0; // id de cada elemento de orden creado
   
  }
  //añade un producto({name,value,id} a la orden(list -> array de objetos [el index comienza en 0 y se utiliza como id]
  add(valueToAdd,nameToAdd){
    let newList = [...this.state.list] 
          for( let i = 0; i < newList.length; i++){ 
            if ( newList[i].name === nameToAdd) {
                newList[i].count++;
                newList[i].value = newList[i].value + valueToAdd;
              return this.setState({list:newList})
            }
          }
    this.setState({list: this.state.list.concat([{name : nameToAdd, unit_value:valueToAdd, value:valueToAdd, id:this.index, count:1 }])});
    this.index ++;
  }

  addCheeseorEgg(eggOrCheese){
    let newList = [...this.state.list] 
    let lastItem = newList[newList.length-1];
    if(lastItem ===undefined){
      return
    }
    if ( eggOrCheese === '+ Queso') {
    
              lastItem.name = lastItem.name+" + Queso"
              lastItem.value = lastItem.value + 500;
              return this.setState({list:newList})
    }
              lastItem.name = lastItem.name+" + Huevo"
              lastItem.value = lastItem.value + 500;
             this.setState({list:newList})
  }
  

  //
  delete(id){
    let newList = [...this.state.list] //crea copia de list para no cambiar directamente el estado de un componente
    for( var i = 0; i < newList.length; i++){ //recorre la newList y consigue la id de cada elemento,si coincide
      if ( newList[i].id === id) { 
        if( newList[i].count !== 1){
          newList[i].value = newList[i].value - newList[i].unit_value ;
          newList[i].count--;
          return this.setState({list:newList})
        }
        newList.splice(i, 1); //con la misma id que se le pasa borra este elemento (desde posicion i, elimina 1 elemento)
        break;
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
      client:"",
      errorMsg:""
    })
  }

  saveOrder(){
    if(this.state.client === ""){
      this.setState({
        errorMsg:'Debe ingresar un nombre.'}) 
      return 
    }
    let idClient =this.state.client + Date.now();

    let data=
    {
    id: idClient,
    client: this.state.client,
    list: this.state.list,
    not_ready: true,
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
        <Navbar state={this.state.selectedNavbar} />
          <div className="content-row">
            <section className="button-content-col">
              <div className="category-btn-row">
                {Object.keys(Menu).map(btn=> <CategoryBtn name={btn.toUpperCase()} state={btn === 'Desayunos' ? this.state.desayunos : this.state.almuerzos} view={this.view} key={btn}/>)}
              </div>
                {this.state.desayunos &&
                <div className="item-btn-row"> {Menu.Desayunos.map(btn=><Btn name={btn.name} value={btn.value} add={this.add} key={btn.name}/>)}
                </div> }
                {this.state.almuerzos && <LunchBtn add={this.add} addCheeseorEgg={this.addCheeseorEgg}/>}  
            </section>  
            <aside className="side-content-col">
            <div className="aside-content">
              <div className="line-order">
                <p>PEDIDO</p>
                <p className='error-msg'>{this.state.errorMsg}</p>
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

