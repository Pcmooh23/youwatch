import React from 'react';
import './Header_left.scss';
import {Menu} from 'lucide-react';
import logo from '../../assets/youtube.png';

const Header_Left = ({isDark ,toggleFullbar, fullWidthSearch}) => {
  return (
    <div className={`left-section ${fullWidthSearch ? 'hide-section' : ''} ${isDark ? 'dark-mode' : ''}`}>
    <button className='menu-button'> 
      <Menu className='menu-icon' onClick={toggleFullbar} />
    </button>
    <a href='/'>
      <img className='you-logo' src={logo}/>
      <h1 className='site-name'>YouWatch</h1>
    </a>
  </div>
  )
}

export default Header_Left
