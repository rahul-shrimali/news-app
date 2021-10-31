
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';


export default class App extends Component {

  constructor(){
    super();
    this.state = {
      mode : "light"
    }
  }

  toggleMode = ()=>{
    if(this.state.mode === "light"){
      this.setState({mode : "dark"});
      document.body.style.backgroundColor = "#464343";
    }else{
      this.setState({mode : "light"});
      document.body.style.backgroundColor = "white";
    }
  }

  render() {
    return (
      <div>
        <NavBar mode = {this.state.mode} toggleMode = {this.toggleMode} />
        <News mode = {this.state.mode} toggleMode = {this.toggleMode}/>
      </div>
    )
  }
}
