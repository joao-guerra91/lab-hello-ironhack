import React, { Component } from 'react';
import Declarative from './components/Declarative';
import Components from './components/Components';
import SingleWay from './components/SingleWay';
import Jsx from './components/Jsx';
import './App.css'

function App() {
    return (
      <div>
        <div className="nav">
        <img src="../public/images/ironhack-logo.svg" />
        <img className="menu" src="../public/images/menu-top.svg" />

        </div>
        <div className="app">
          <h1>Say hello to <br></br>ReactJS</h1>
          <p>You will learn how to use <br></br> the most popular frontend library,<br></br> and become a super Ninja developer.</p>
          <button>Awesome!</button>
        </div>
        
        <div className="elements">
        <Declarative />
        <Components />
        <SingleWay />
        <Jsx />
        </div>
        
      </div>
        
    );
}
export default App;

