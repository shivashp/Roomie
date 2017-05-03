import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from './components/Login';
import Home from './components/Home';

const Root = () => {
  return (
    <Router key="root" hideNavBar={true} >
      <Scene key="home" component={Home} title="Home" />
      <Scene key="login" component={Login} title="Login" initial={true}/>
    </Router>
  )
}

export default Root;
