import React from 'react';
import '../App.css';



class CategoryBtn extends React.Component{

    render(){
      return <button onClick={() => this.props.view(this.props.name)} className='btn'>{this.props.name}</button>
    }
}

export default CategoryBtn;