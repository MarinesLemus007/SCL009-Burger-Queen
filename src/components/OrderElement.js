import React from 'react';
class OrderElement extends React.Component{
    // constructor(props) {
    //     super(props);
        
    //   }


    render(){
      return (<div>
          <p>{this.props.name} {this.props.value} <button className="buttonDelete" onClick={() => this.props.delete(this.props.id)}>X</button></p>
      </div>)
    }
}

export default OrderElement;