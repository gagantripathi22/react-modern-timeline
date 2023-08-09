import React, { useContext, useEffect } from 'react';
import { StyleContext } from '../..';
import '../../styles/TimelineEvent/index.css';

const TimelineEvent = (props) => {
  const { title, content, date, image = null, iconColor = '#286ed6' } = props;
  const StyleContextData = useContext(StyleContext);
  const titleStyle = StyleContextData.titleStyle;
  const contentStyle = StyleContextData.contentStyle;
  const containerStyle = StyleContextData.containerStyle;
  return (
    <div className="timeline-event">
      <span className="event-icon-area">
        <span
          className="icon-circle"
          style={{ backgroundColor: iconColor }}
        ></span>
      </span>
      <section className="event-detail-area">
        <h1 className="title" style={titleStyle}>
          {title}
        </h1>
        <div className="content-area" style={containerStyle}>
          {image && (
            <div className="content-img-area">
              <img className="content-img" src={image}></img>
            </div>
          )}
          <div className="content-text-area">
            <p className="content-text" style={contentStyle}>
              {content}
            </p>
          </div>
        </div>
        <div className="date">{date}</div>
      </section>
    </div>
  );
};

export default TimelineEvent;
