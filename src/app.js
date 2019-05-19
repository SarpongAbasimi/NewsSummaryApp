import React from 'react';
import '../src/styles/app.css';
import { Nav } from './components/nav';
import {Body } from './components/body';

export class NewsSummary extends React.Component{
  render(){
      return(
        <div>
          <Nav/>
          <Body/>
        </div>
      )
  } 
}