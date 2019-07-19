import React from 'react';
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
    for( var i = 0; i < newList.length; i++){ //recorre la newList y consigue la posicion de cada elemento,si coincide
      if ( newList[i].id === id) { //con la misma id que se le pasa borra este elemento (desde posicion i, elimina 1 elemento)
        newList.splice(i, 1); 
      }
    }
   this.setState({list:newList}) //remplaza la list con la newList modificada
  }

  view(category){ // dependiendo de la categoria cambia el estado, este metodo se pasa como propiedad al boton
    if(category ==="Desayunos"){
      this.setState({
        Desayunos:true,
        Almuerzos:false
      })
    }
    if(category ==="Almuerzos"){
      this.setState({
        Desayunos:false,
        Almuerzos:true
      })
    }
  }

  changeClient(el){
    this.setState({
        client: el.target.value
    })
}

  render(){
    return (
      <>
        <Navbar/>
          <section className="content">
            <div className="buttonday">
              {Object.keys(Menu).map(btn=> <CategoryBtn name={btn} view={this.view} key={btn}/>)}
              <ul>
                {this.state.Desayunos && Menu.Desayunos.map(btn=><Btn name={btn.name} value={btn.value} add={this.add} key={btn.name}/>)}
                {this.state.Almuerzos && <LunchBtn add={this.add}/>}
              </ul>
            </div>
          </section>  
          <aside className="side-content">
            <OrderName changeClient={this.changeClient} client={this.state.client}/>
            <div>
              <Order list = {this.state.list} delete={this.delete}/>
            </div>
          </aside>
      </>
    )
  }
}

export default MenuView;

