import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//class Clicker extends Component {
//  constructor(props) {
//      super(props);
//      this.state = { counter: 0 };
//      this.surname = 'yolo';
//  }    
//    
//  handleClick = () => {
//      console.log(this);
//      this.setState({          
//          counter: this.state.counter + 1
//      })
//  }
//  handleName = function(val){
//      return 'Will ' + val
//  };  
//  render() {
//    
//    return (
//      <div className="App">
//        <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <h1 className="App-title">{this.handleName('cool')}{this.surname}</h1>
//        </header> 
//         <button onClick={this.handleClick}>
//          {this.state.counter}
//        </button>
//      </div>
//      
//    );
//  }
//}


const Card = (props) => {
    console.log(props);
    return (
        <div style= {{margin: '1em'}}>
            <img width="150" src="https://avatars1.githubusercontent.com/u/8445?v=4"/>
            <div style={{ fontSize: '1.25', fontWeight: 'bold' }}>{props.name}</div>
            <div>{props.email}</div>
        </div>
        
    );
};

const CardList = ({robots}) => {
    const cardsArray = robots.map(robot => (
    <Card
      name={robot.name}
      email={robot.email}
      id={robot.id} />
    ));    
    return (
        <div>
          {cardsArray}
        </div>
    );
}


export { CardList }


