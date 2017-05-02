import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from './components/Login';

const Root = () => {
  return (
    <Router key="root">
      <Scene key="login" hideNavBar={true} component={Login} title="Login" />
    </Router>
  )
}

export default Root;
