import './App.css';
import { Greeting } from './Greeting';
import { CongratsMsg } from './CongratsMsg';
import { CounterButton } from './CounterButton';
// for state hoisting, import useState
import { useState } from 'react';

// react has unidirectional data flow
// parent components (App.js in current case) can pass props to children
// Greeting, CongratsMsg and CounterButton are children of App.js
// must use "hoisting the state" - move the state of a component to a place where
// it can be passed down to other components

// after importing useState, bring functions for state transfer into App component
function App() {

  const [timesClicked, setTimesClicked] = useState(0);

  const increment = () => setTimesClicked(timesClicked + 1);
  // move a state two child components of the same parent will use into the parent
  // then pass this as prop to other components
  
  // adding unmounting/unsubscribe behanvior to remove component after congrats msg triggered
  const [hideMsg, setHideMsg] = useState(false);
  // change the useState argument to true when congrats triggered with by calling hideMsg below
  return (
    <div className="App">
      <header className="App-header">
        {hideMsg ? null 
        : <CongratsMsg timesClicked={timesClicked} 
            triggerClicks={12} 
            onHide={() => setHideMsg(true)}/>} 
        <CounterButton onIncrement={increment} timesClicked={timesClicked} />
        <Greeting name="Lord Glablok" numberOfConquests={3895} />
      </header>
    </div>
  );
}

export default App;
