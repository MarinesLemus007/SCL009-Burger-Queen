import React from 'react';
import '../index.css';



class CategoryBtn extends React.Component{
  
    render(){
      
      return <button onClick={() => this.props.view(this.props.name)} className=
      {this.props.state ? 'btn-selected-category' : 'btn'}>{this.props.name}</button>
    }
}

export default CategoryBtn;