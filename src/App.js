import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import HomePage from './page/homepage/homepage.component';
import shop from './page/shop/shop.component';
import Header from './component/header/header.component';
import SiginSignup from './page/signin-signup/signin-signup.component';

const SoloPage =() =>(
  <div>
  <h1> Solo Page</h1>
  </div>
  );

function App(){
    return(
              <div>
              <Header />
               <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={shop} />
                <Route path='/signin' component={SiginSignup} />
                </Switch>
              </div>
      );
  }
 


export default App;
