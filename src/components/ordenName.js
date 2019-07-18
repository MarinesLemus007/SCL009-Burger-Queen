import React, {Component} from 'react';

class OrdenName extends Component{
    constructor(props){
        super(props)
        this.state = {
            client: ""
        }
        this.changeClient = this.changeClient.bind(this)
    }

    changeClient(el){
        this.setState({
            client: el.target.value
        })
    }

    render(){
        return (
            <aside>
                <form>
                    <div className="ordenform">
                         <label>ORDEN</label>
                        <input type="text"
                        onChange={this.changeClient}
                        />
                        <input className ="buttonOrden" type="submit" value="enviar"/>
                    </div>
                </form>
            </aside>
        )
    }
}

export default OrdenName