import React from 'react';
import Btn from './Btn'
import Menu from '../data/menu.json'
import '../btn.css';


class LunchBtn extends React.Component{
    
    render(){
        return (
            <>
        <div>
            <p>Hamburguesas</p>
            {Menu.Almuerzos.Hamburguesas.map(btn=><Btn name={btn.name} value={btn.value} add={this.props.add} key={btn.name}/>)}
            <p>Acompañamientos</p>
            {Menu.Almuerzos.Acompañamientos.map(btn=><Btn name={btn.name} value={btn.value} add={this.props.add} key={btn.name}/>)}
            <p>Bebestibles</p>
            {Menu.Almuerzos.Bebestibles.map(btn=><Btn name={btn.name} value={btn.value} add={this.props.add} key={btn.name}/>)}
        </div>
    </>)
    }
}

export default LunchBtn;