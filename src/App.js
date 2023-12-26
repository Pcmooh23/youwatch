import './App.scss';
import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CategoryBar from './components/CategoryBar';
import { videos } from './data/data';
import VideoItem from './components/VideoItem';

function App() {
  const [fullBar, setFullBar] = useState(false);
  const [isDark, setIsDark] = useState(false);

 
  const toggleFullbar  = () => {
    setFullBar(!fullBar);
  };

  const changeColor = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    return () => {
      document.body.classList.remove('dark-mode');
    };
  }, [isDark]);

  return (
    <div className={`App ${isDark ? 'dark-mode': ''}`}>
      <Header isDark={isDark} toggleFullbar={toggleFullbar} isSidebarVisible={fullBar} />
      <div className='bottom-half'>
        <Sidebar isDark={isDark} changeColor={changeColor} className={fullBar ? 'visible' : ''} toggleFullbar={toggleFullbar} fullBar={fullBar}/>
        <div className='feed-area'>
          <CategoryBar isDark={isDark} isFullBarVisible={fullBar}/>
          <div className={`feed ${ fullBar ? 'sidebar-is-full':''}`}>
            {videos.map(video => ( <VideoItem key={video.id} {...video} fullBar={fullBar} isDark={isDark}/>))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
