import React, {Component} from 'react';

class OrderName extends Component{
  
      render() {
        return (
          <form>
            <label>
              Cliente:
              <input value={this.props.client} onChange={this.props.changeClient} />
            </label>
          </form>
        );
      }
    }

export default OrderName