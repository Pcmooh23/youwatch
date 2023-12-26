import React from 'react';
import  './ThemeButton.scss';

const ThemeButton = ({isDark, changeColor}) => {

  return (
    <div className="toggle-switch">
        <input type="checkbox" id="theme-toggle" className="toggle-checkbox" 
            checked={isDark} onChange={changeColor}/>
        <label htmlFor="theme-toggle" className="toggle-label">
            <div className='round'>
                <span className="toggle-inner" />
            </div>
        </label>
  </div>
  )
}

export default ThemeButton
