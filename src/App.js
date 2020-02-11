import React from 'react';
import './App.css';
import {BrowserRouter,Route, Link, Switch} from 'react-router-dom'

import Tescomponent from './components/testcomponent'
import Navbar from './components/navbar'
import Profile from './components/profile'
import About from './components/about'
import Contact from './components/contact'
import Home from './components/home'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <hr/>

        {/* <Route path="/" component = {Home}/>
        <Route path="/profile" component = {Profile}/>
        <Route path="/about" component = {About}/>
        <Route path="/contact" component = {Contact}/> */}
        <Route path="/rendering" render={()=>{
          return <h1>This is just rendering rout</h1>
          }}/>
        
        <Route path="/" exact render = {()=>{
          return <Home name = "Adil from Home"/>
        }}/>
        <Route path="/profile" component = {Profile}/>
        <Route path="/about" component = {About}/>
        <Route path="/contact" component = {Contact}/>

      
      </div>
    </BrowserRouter>
  );
}

export default App;
