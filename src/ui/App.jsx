import React from 'react';

import 'font-awesome/css/font-awesome.css'

import './App.css';

import {NavBar} from './Nav';
import {Footer} from './Footer';
import ViewState from './ViewState';

export const App = () => (
  <div>
    <NavBar/>
    <ViewState/>
    <Footer/>
  </div>
);
