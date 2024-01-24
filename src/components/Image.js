import React from 'react';

class Image extends React.Component{
    render(){
        return(
            <img className="image" src={this.props.title} alt=""/>
        )
    }
}

export default Image