import React, {useState} from 'react';
import './Sidebar.scss';
import LargeButtonLayout from '../LargeButtonLayout';
import ThemeButton from '../ThemeButton';
import {sidebar_mini, fullBarItems} from '../../data/data';
import HeaderLeft from '../HeaderLeft';


const Sidebar = ({className, isDark, changeColor, toggleFullbar, fullBar}) => {

  const [activeBut, setActiveBut] = useState(null);
  const [buttonIndex, setButtonIndex] = useState(0);

  const changeActiveButton = (section, index) => {
        setActiveBut(`${section}_${index}`);
  }

  const makeActive = (index) => {
    setButtonIndex(index)
  }

  return (
    <div className={`sidebar ${className} ${isDark ? 'dark-mode': ''}`}>
      <div className='mini-container'>
        <aside className={`sidebar-mini`}>
          {sidebar_mini.map((item, index) => (
            <button key={index} className={`${item.buttonName} ${buttonIndex === index ? 'active': ''}`} 
            onClick={() => makeActive(index)}>
              {React.cloneElement(item.src, {className: item.imgName})}
              {item.detail}
            </button>
          ))}
          <ThemeButton isDark={isDark} changeColor={changeColor}/>
        </aside>
      </div>
      {fullBar && <div onClick={toggleFullbar} className={`shadow-overlay`}/>}
      <aside className={`sidebar-full`}>
        <div className='sidebar-header'>
            <HeaderLeft isDark={isDark} toggleFullbar={toggleFullbar}/>
        </div>
        <div className='large-buttons'>
          <LargeButtonLayout title='' visibleItemCount={3} isDark={isDark}>
              {fullBarItems[0].map((mainItem, index) => (
                <button 
                  key={`${mainItem.name}_${index}`}
                  className={` large-side-button ${activeBut === `section0_${index}` ? 'active' : ''}`}
                  onClick={() => changeActiveButton('section0', index)}>
                    {React.cloneElement(mainItem.src, {className: mainItem.lucid})}
                    <div className='name'>{mainItem.name}</div>
                </button>
              ))}
          </LargeButtonLayout>
          <LargeButtonLayout title='You' visibleItemCount={5} isDark={isDark}>
            {fullBarItems[1].map((mainItem, index) => (
              <button 
                key={`${mainItem.name}_${index}`}
                className={` large-side-button ${activeBut === `section1_${index}` ? 'active' : ''}`}
                onClick={() => changeActiveButton('section1',index)}>
                  {React.cloneElement(mainItem.src, {className: mainItem.lucid})}
                  <div className='name'>{mainItem.name}</div>
              </button>
            ))}
          </LargeButtonLayout>
          <LargeButtonLayout title='Subscriptions' visibleItemCount={7} isDark={isDark}>
            {fullBarItems[2].map((mainItem, index) => (
              <button 
                key={`${mainItem.name}_${index}`}
                className={` large-side-button ${activeBut === `section2_${index}` ? 'active' : ''}`}
                onClick={() => changeActiveButton('section2',index)}>
                  <img alt='' src={mainItem.image} style={{borderRadius:'50%'}}/>
                  <div className='name'>{mainItem.name}</div>
              </button>
            ))}
          </LargeButtonLayout>
          <LargeButtonLayout title='Explore' visibleItemCount={11} isDark={isDark}>
            {fullBarItems[3].map((mainItem, index) => (
              <button 
                key={`${mainItem.name}_${index}`}
                className={` large-side-button ${activeBut === `section3_${index}` ? 'active' : ''}`}
                onClick={() => changeActiveButton('section3',index)}>
                  {React.cloneElement(mainItem.src, {className: mainItem.lucid})}
                  <div className='name'>{mainItem.name}</div>
              </button>
            ))}
          </LargeButtonLayout>
          <LargeButtonLayout title='More from YouTube' visibleItemCount={5} isDark={isDark}>
            {fullBarItems[4].map((mainItem, index) => (
              <button 
                key={`${mainItem.name}_${index}`}
                className={` large-side-button ${activeBut === `section4_${index}` ? 'active' : ''}`}
                onClick={() => changeActiveButton('section4',index)}>
                  <img alt='' src={mainItem.image}/>
                  <div className='name'>{mainItem.name}</div>
              </button>
            ))}
          </LargeButtonLayout>
          <LargeButtonLayout title='' visibleItemCount={4} isDark={isDark}>
            {fullBarItems[5].map((mainItem, index) => (
              <button 
                key={`${mainItem.name}_${index}`}
                className={` large-side-button ${activeBut === `section5_${index}` ? 'active' : ''}`}
                onClick={() => changeActiveButton('section5',index)}>
                  {React.cloneElement(mainItem.src, {className: mainItem.lucid})}
                  <div className='name'>{mainItem.name}</div>
              </button>
            ))}
          </LargeButtonLayout>
        </div>
        <ThemeButton isDark={isDark} changeColor={changeColor}/>
        <div className='boogle'>
            <p className='end-details'>
            About Press Copyright<br/>
            Contact us Creators<br/>
            Advertise Developers<br/><br/>

            Terms Privacy Policy & Safety<br/>
            How YouTube works<br/>
            Test new features<br/>
            NFL Sunday Ticket<br/>
            </p>
            <span className='llc'>&copy; 2023 Boogle LLC</span>
          </div>
      </aside>
    </div>
  )
}

export default Sidebar
