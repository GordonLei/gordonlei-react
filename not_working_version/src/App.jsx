import React, { Component} from "react";
import {hot} from "react-hot-loader";
import { HashRouter, Route, Link } from "react-router-dom";

class App extends Component{
  render(){
    return(
      <HashRouter basename='/'>
      <div className="App">
        <h1> Hello, World! </h1>
      </div>
      </HashRouter>
    );
  }
}

export default App;