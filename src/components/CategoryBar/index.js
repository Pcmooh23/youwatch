import React, { useState, useEffect, useRef } from 'react';
import './CategoryBar.scss';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {categories} from '../../data/data';


const CategoryBar = ({isDark, isFullBarVisible}) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(true); 
  const categoryContainerRef = useRef(null);

  const changeActiveButton = (index) => {
        setActiveIndex(index);
  }

  const scrollLeft = () => {
    if (categoryContainerRef.current) {
      categoryContainerRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (categoryContainerRef.current) {
      categoryContainerRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    }
  };

  const checkArrowsVisibility = () => {
    const container = categoryContainerRef.current;
    if (container) {
      setIsLeftVisible(container.scrollLeft > 0);
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      setIsRightVisible(container.scrollLeft < maxScrollLeft);
    }
  };

  useEffect(() => {
    const container = categoryContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkArrowsVisibility);
      checkArrowsVisibility();
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', checkArrowsVisibility);
      }
    };
  }, []);
  

  return (
<div className={`holder ${isDark ? 'dark-mode' : ''} ${isFullBarVisible ? 'with-sidebar-full' : ''}`}>
      {isLeftVisible && (
        <div className="left-arrow-container">
          <button className="left-button" onClick={scrollLeft}>
            <ChevronLeft className='left-icon'/>
          </button>
        </div>
      )}
      {isRightVisible && (
        <div className="right-arrow-container">
          <button className="right-button" onClick={scrollRight}>
            <ChevronRight className='right-icon'/>
          </button>
        </div>
      )}
      <div ref={categoryContainerRef} className='category-container scroll-area' onScroll={checkArrowsVisibility}>
        {categories.map((category, index) => (
          <button
            key={index}
            className={activeIndex === index ? 'active' : ''}
            onClick={() => changeActiveButton(index)}>
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar
