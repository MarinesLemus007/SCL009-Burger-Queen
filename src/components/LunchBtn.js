import React from 'react';
import Btn from './Btn'
import Menu from '../data/menu.json'
import '../index.css';

class LunchBtn extends React.Component{
    
    render(){
        return (
            <>
        <div>
            <div>
                <p>Hamburguesas</p>
                {Menu.Almuerzos.Hamburguesas.map(btn=><Btn name={btn.name} value={btn.value} add={this.props.add} key={btn.name}/>)}
            </div>
            <div>
                <p>Acompañamientos</p>
                {Menu.Almuerzos.Acompañamientos.map(btn=><Btn name={btn.name} value={btn.value} add={this.props.add} key={btn.name}/>)}
            </div>
            <div>
            <p>Bebestibles</p>
            <span>Agua</span>
            {Menu.Almuerzos.Bebestibles.Agua.map(btn=><Btn name={btn.name} value={btn.value} add={this.props.add} key={btn.name}/>)}
            <span>Gaseosa</span>
            {Menu.Almuerzos.Bebestibles.Gaseosa.map(btn=><Btn name={btn.name} value={btn.value} add={this.props.add} key={btn.name}/>)}
            </div>
        </div>
    </>)
    }
}

export default LunchBtn;