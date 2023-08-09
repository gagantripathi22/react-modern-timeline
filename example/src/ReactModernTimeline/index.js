import React, { createContext } from 'react';
import './index.css';
import TimelineEvent from './components/TimelineEvent/index.js';

export const StyleContext = createContext();

const ReactModernTimeline = (props) => {
  return (
    <StyleContext.Provider value={props}>
      <div className="main-container">
        <span className="time-line" />
        {props.children}
      </div>
    </StyleContext.Provider>
  );
};

export { ReactModernTimeline, TimelineEvent };
