import './App.css';
import { ReactModernTimeline, TimelineEvent } from './ReactModernTimeline';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <ReactModernTimeline>
          <TimelineEvent
            title="Event timeline for react"
            content="Lorem ipsum dolor sit amet"
            date="27, Nov 2023 at 09:30 AM"
          />
          <TimelineEvent
            title="Event with image"
            content="Lorem ipsum dolor sit amet"
            date="27, Nov 2023 at 09:30 AM"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sydney_Opera_House_-_Dec_2008.jpg/800px-Sydney_Opera_House_-_Dec_2008.jpg"
            iconColor="limegreen"
          />
          <TimelineEvent
            title="Event timeline for react"
            content="Lorem ipsum dolor sit amet"
            date="27, Nov 2023 at 09:30 AM"
          />
        </ReactModernTimeline>
      </div>
    </div>
  );
}

export default App;
