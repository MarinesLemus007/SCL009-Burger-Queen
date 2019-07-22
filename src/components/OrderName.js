import React, {Component} from 'react';

class OrderName extends Component{
  
      render() {
        return (
          <form className="client-input">
            <label>
              Cliente:
              <input placeholder="Nombre del cliente" className="name-input"value={this.props.client} onChange={this.props.changeClient} />
            </label>
          </form>
        );
      }
    }

export default OrderName