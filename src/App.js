import React from 'react';
import './App.css';
import {BrowserRouter,Route, Link, Switch} from 'react-router-dom'

import Tescomponent from './components/testcomponent'
import Navbar from './components/navbar'
import Profile from './components/profile'
import About from './components/about'
import Contact from './components/contact'
import Home from './components/home'
import Loading_test from './components/Loading_test'
import Axios_auth from './components/axios_auth'
import Token_based_axios from './components/token_based_axios'
import Localstorage from './components/localstorage'
import Login from './pages/login'
import Register from './pages/register'
import contact from './components/contact';
import Chart from './components/chart'
import ChartPie from './components/chartpie'
import Doughnut from './components/doughnut'
import LineGraph from './components/linegraph'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <hr/>
        {/* <Loading_test/> */}
        <hr/>
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
        <Route path="/localstorage" component = {Localstorage}/>
        <Route path="/about" component = {About}/>
        <Route path="/token_based_axios" component = {Token_based_axios}/>
        <Route path="/axios_auth" component = {Axios_auth}/>
        <Route path="/login" component = {Login}/>
        <Route path="/register" component = {Register}/>
        <Route path="/contact" component = {contact}/>
        <Route path="/test" component = {Tescomponent}/>
        <Route path="/chart" component = {Chart}/>
        <Route path="/chart-pie" component = {ChartPie}/>
        <Route path="/chart-daughnut" component = {Doughnut}/>
        <Route path="/chart-line" component = {LineGraph}/>


      
      </div>
    </BrowserRouter>
  );
}

export default App;
