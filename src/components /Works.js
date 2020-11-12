import React, { Component } from 'react';


class Works extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
        <div className='works'>
        <a href={this.props.gitHub}> </a>
        <a href={this.props.url}>
            <img src={this.props.imageSrc} alt={this.props.title}></img>
            </a>
            <h1>{this.props.title}</h1>
            <span>{this.props.des}</span>
        </div> 
        </div>   
        
        )}
}
 
export default Works; 