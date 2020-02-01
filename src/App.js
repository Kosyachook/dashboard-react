import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
//import Layout from './components/Layout';

import Home from './pages/Home';
import About from './pages/About';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sidebar: "Sidebar Menu",
      main: "MainView Field"
    };
  }

  render(){
    /*return (
        <Layout main={this.state.main} sidebar={this.state.sidebar}/>
      );*/
      return (
        <BrowserRouter>
          <Route exact path="/">
            <Home main={this.state.main} sidebar={this.state.sidebar}/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </BrowserRouter>
      );
  }
}

export default App;
