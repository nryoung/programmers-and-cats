import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import style from '../css/style.css';

/*
 * Import Components
 */
import App from './components/App'

/*
 * Routes
 */

var routes = (
  <Router>
    <Route path="/" component={App} />
  </Router>
)

render(routes, document.getElementById('root'));
