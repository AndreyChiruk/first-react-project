import React from 'react';
import Image from './Image';
import fon from '../images/minsk.jpg';
class AppClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            time: "",
        }
    }
    render(){
        return(
            <div className="block">
                <p>Текущее время в Минске: {this.state.time}</p>
                <button className="btn" onClick={this.titleClick}>Узнать</button>
                <Image title={fon}/>
            </div>
        )
    }
    titleClick = () => {
        let data = new Date();
        this.setState({time: data.getHours() + ':' + data.getMinutes()})
    } 
}

export default AppClass