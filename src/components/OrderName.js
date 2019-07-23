import React, {Component} from 'react';

class OrderName extends Component{
  
      render() {
        return (
          <form className="client-input">
            <label>
              Cliente :
            </label>
            <input placeholder="Nombre de cliente" className="name-input"value={this.props.client} onChange={this.props.changeClient} />
          </form>
        );
      }
    }

export default OrderName