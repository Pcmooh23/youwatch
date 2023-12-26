import React, { useState, useEffect, useRef } from 'react';
import './Header.scss';
import pin from '../../assets/nob.jpeg';
import { ArrowLeft, Search, Mic, Video, Bell, Menu } from 'lucide-react';
import logo from '../../assets/youtube.png'

const Header = ({isDark, toggleFullbar, isSidebarVisible}) => {
  const [fullWidthSearch, setFullWidthSearch] = useState(false);
  const headerRef = useRef(null);

  const checkWidthAndReset = () => {
    if (headerRef.current && headerRef.current.offsetWidth > 700) {
      setFullWidthSearch(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', checkWidthAndReset);

    return () => {
      window.removeEventListener('resize', checkWidthAndReset);
    };
  },[]);

  const togglerBar = () => {
    setFullWidthSearch(!fullWidthSearch);
  };


  return (
    
    <div className={`header ${isDark ? 'dark-mode': ''} ${isSidebarVisible ? 'header-behind-sidebar' : ''}`} ref={headerRef}>
      <div className={`left-section ${fullWidthSearch ? 'hide-section' : ''} `}>
        <button className='menu-button'> 
          <Menu className='menu-icon' onClick={toggleFullbar} />
        </button>
        <a href='/'>
          <img className='you-logo' src={logo}/>
          <h1 className='site-name'>YouWatch</h1>
        </a>
      </div>
      <div className={`middle-section ${fullWidthSearch ? 'full-width' : ''}`}>
        {fullWidthSearch && (<button className='back-button' onClick={togglerBar}>
          <ArrowLeft className='left-arrow'/>
          <div className='tooltip'>Back</div>
        </button>)}
        <form className='search-form'>
          <div className='search-bar'>
            <input className='search-text' type='search' placeholder='Search'/>
            <button className='search-but'>
                <Search className='search-icon'/>
                <div className='tooltip'>Search</div>
            </button>
          </div>
          <button type='button' className='voice-button'>
            <Mic className='voice-icon' />
            <div className='tooltip'>Search with your voice</div>
          </button>
        </form>
      </div>
      <div className={`right-section ${fullWidthSearch ? 'hide-section' : ''}`}>
        <button className='search-button-right' onClick={togglerBar}>
          <Search className='icon'/>
          <div className='tooltip'>Search</div>
        </button>
        <button className='voice-button-right'>
          <Mic className='icon' />
          <div className='tooltip'>Search with your voice</div>
        </button>
        <button className='upload-button'>
          <Video className='icon'/>
          <div className='tooltip'>Create</div>
        </button>
        <button className='notify-button'>
          <Bell className='notify-icon'/>
          <div className='notify-count'>3</div>
          <div className='tooltip'>Notifications</div>
        </button>
        <img className='pin-girl' src={pin}/>
      </div>
    </div>
  )
}

export default Header