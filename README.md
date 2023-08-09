# react-modern-timeline

React component to create a responsive modern event timeline

<img width="723" alt="Screenshot 2023-08-09 at 11 33 18 PM" src="https://github.com/gagantripathi22/react-modern-timeline/assets/32246605/01c35200-5791-4c57-b737-7d7c46829594">

## Features

- Lightweight
- Responsive
- Customizable

## Getting started

Install the package with **npm** or **yarn**

`npm install react-modern-timeline`

`yarn add react-modern-timeline`

## Usage

The following snippet generates the timeline you see in the screenshot:

```jsx
import { ReactModernTimeline, TimelineEvent } from './ReactModernTimeline';

function App() {
  return (
    <div className="App">
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
          title="Event timeline heading"
          content="Lorem ipsum dolor sit amet"
          date="27, Nov 2023 at 09:30 AM"
        />
      </div>
    </div>
  );
}

export default App;
```

## Props

### ReactModernTimeline

Wrapper component that creates the infinite vertical timeline

| Name           | Type   | Description                               |
| -------------- | ------ | ----------------------------------------- |
| titleStyle     | object | Ovveride inline styles of event title     |
| contentStyle   | object | Override inline styles of event content   |
| containerStyle | object | Override inline styles of event container |

### TimelineEvent

Every element of the timeline will be represented by the `TimelineEvent` component.

| Name      | Type   | Description                                               |
| --------- | ------ | --------------------------------------------------------- |
| title     | string | Title of the event                                        |
| content   | string | Content or description of the event                       |
| date      | string | Date of the event (auto-formatting for supported for now) |
| image     | string | Custom CSS styling for the icon                           |
| iconColor | string | Override style for the entire event container             |

## Contributing and Bug reporting

Visit [GitHub](https://github.com/gagantripathi22/react-modern-timeline).

## License

MIT
