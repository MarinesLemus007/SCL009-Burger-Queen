import React from 'react';
import './App.css';
import './index.css';
import './navbar.css';
import './btn.css';
import Navbar from './navbar';
import Btn from './components/Btn'
import Menu from './data/menu.json'
import Order from './components/Order';
import CategoryBtn from './components/CategoryBtn'
import LunchBtn from './components/LunchBtn'


class MenuView extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {list: [],category:null};
    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
    this.view = this.view.bind(this);
    this.index = 0; // id de cada elemento de orden creado
  }
  
  add(valueToAdd,nameToAdd){
    this.setState({list: this.state.list.concat([{name : nameToAdd, value:valueToAdd, id:this.index}])});
    this.index ++;
  }

  delete(id){
    let newList = [...this.state.list]
    for( var i = 0; i < newList.length; i++){ 
      if ( newList[i].id === id) {
        newList.splice(i, 1); 
      }
   }
   this.setState({list:newList})
  }
  view(category){
if(category ==="Desayunos"){
  console.log(Object.values(Menu.Almuerzos))
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

  render(){
  return (
<>
    <Navbar/>
    <section>
      <div className="buttonday">
        {Object.keys(Menu).map(btn=>
           <CategoryBtn name={btn} view={this.view} key={btn}/>)}
        <ul>
        {this.state.Desayunos && Menu.Desayunos.map(btn=><Btn name={btn.name} value={btn.value} add={this.add} key={btn.name}/>)}
        {this.state.Almuerzos && <LunchBtn add={this.add}/>}
        </ul>
      </div>
      <div>
        <Order list = {this.state.list} delete={this.delete}/>
      </div>
  </section>
</>
  )
}
}

export default MenuView;

