import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/nav.css';

export const Nav = ()=>{
  return (<div id='nav'>
    <div className="container img-container">
    <FontAwesomeIcon icon="newspaper" className='newsPaper'/>
    </div>
  </div>)
}
