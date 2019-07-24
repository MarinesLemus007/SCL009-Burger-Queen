import React from 'react';
import '../index.css';



class CategoryBtn extends React.Component{
  
    render(){
      
      return <button onClick={() => this.props.view(this.props.name)} className=
      {this.props.state ? 'selected-category-btn' : 'btn'}>{this.props.name}</button>
    }
}

export default CategoryBtn;