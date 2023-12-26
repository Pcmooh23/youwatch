import React, { useState } from 'react';
import './LargeButtonLayout.scss'; 

const LargeButtonLayout = ({ children, title, visibleItemCount, isDark }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const childrenArray = React.Children.toArray(children);
  const showExpandButton = childrenArray.length > visibleItemCount;
  const visibleChildren = isExpanded ? childrenArray: childrenArray.slice(0, visibleItemCount);

  return (
    <div className={`large-sidebar-section ${isDark ? 'dark-mode': ''}`}>
      {title && <div className="section-title">{title}</div>}
      <div className="children-container">
        {visibleChildren}
      </div>
      {showExpandButton && (
        <button onClick={() => setIsExpanded(!isExpanded)} className="toggle-button">
          {isExpanded ? "Show Less" : "Show More"}
        </button>)}
        <hr className="section-divider" />
    </div>
  );
};

export default LargeButtonLayout;
