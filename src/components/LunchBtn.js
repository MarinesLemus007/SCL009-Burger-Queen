import React from 'react';
import Btn from './Btn'
import Menu from '../data/menu.json'
import '../index.css';

class LunchBtn extends React.Component{
    
    render(){
        return (
            <>
            
        <div id="lunch" className="item-btn-row">
            <p>Hamburguesas</p>
            <div className="item-btn-row">
                {Menu.Almuerzos.Hamburguesas.Simple.map(btn=><Btn name={btn.name} value={btn.value} add={this.props.add} key={btn.name}/>)}
            </div>
            <div className="item-btn-row">
                {Menu.Almuerzos.Hamburguesas.Doble.map(btn=><Btn name={btn.name} value={btn.value} add={this.props.add} key={btn.name}/>)}
            </div>
            <p>Acompañamientos</p>
            <div className="item-btn-row">
                {Menu.Almuerzos.Acompañamientos.map(btn=><Btn name={btn.name} value={btn.value} add={this.props.add} key={btn.name}/>)}
            </div>
            <p>Bebestibles</p>
            <div className="item-btn-row">
            {Menu.Almuerzos.Bebestibles.Agua.map(btn=><Btn name={btn.name} value={btn.value} add={this.props.add} key={btn.name}/>)}
            </div>
            <div className="item-btn-row">
            {Menu.Almuerzos.Bebestibles.Gaseosa.map(btn=><Btn name={btn.name} value={btn.value} add={this.props.add} key={btn.name}/>)}
            </div>
        </div>
    </>)
    }
}

export default LunchBtn;