import React from 'react';
import Btn from './Btn'
import Menu from '../data/menu.json'
import '../index.css';

class LunchBtn extends React.Component{
    
    render(){
        return (
            <>
            
        <div id="lunch" className="item-btn-row">
            <div className="content-item-btn-row">
                <h4>Hamburguesas</h4>
                <div className="item-btn-row">
                    {Menu.Almuerzos.Hamburguesas.Simple.map(btn=><Btn name={btn.name} value={btn.value} add={this.props.add} key={btn.name}/>)}
                </div>
                <div className="item-btn-row">
                    {Menu.Almuerzos.Hamburguesas.Doble.map(btn=><Btn name={btn.name} value={btn.value} add={this.props.add} key={btn.name}/>)}
                </div>
                <div className="item-btn-row">
                    {Menu.Almuerzos.Agregados.map(btn=>
                    <button className="btn-item" onClick={() => this.props.addCheeseorEgg(btn.name)}key={btn.name}>{btn.name.toUpperCase()} </button>)}
                </div>
            </div>
            <div className="content-item-btn-row">
                <h4>Acompañamientos</h4>
                <div className="item-btn-row">
                    {Menu.Almuerzos.Acompañamientos.map(btn=><Btn name={btn.name} value={btn.value} add={this.props.add} key={btn.name}/>)}
                </div>
            </div>
            <div className="content-item-btn-row">
                <h4>Bebestibles</h4>
                <div className="item-btn-row">
                    {Menu.Almuerzos.Bebestibles.Agua.map(btn=><Btn name={btn.name} value={btn.value} add={this.props.add} key={btn.name}/>)}
                </div>
                <div className="item-btn-row">
                    {Menu.Almuerzos.Bebestibles.Gaseosa.map(btn=><Btn name={btn.name} value={btn.value} add={this.props.add} key={btn.name}/>)}
                </div>
            </div>
        </div>
    </>)
    }
}

export default LunchBtn;