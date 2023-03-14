import { CounterButton } from '../CounterButton';
import { CongratsMsg } from '../CongratsMsg';
import { useState } from 'react';

export const CounterButtonPage = () => {
  const [timesClicked, setTimesClicked] = useState(0);
  const increment = () => setTimesClicked(timesClicked + 1);
  const [hideMsg, setHideMsg] = useState(false);
  return (
    <>
      <h1>My Counter Button Page</h1>
      {hideMsg ? null 
        : <CongratsMsg timesClicked={timesClicked} 
            triggerClicks={12} 
            onHide={() => setHideMsg(true)}/>} 
      <CounterButton onIncrement={increment} timesClicked={timesClicked} />        
    </>
  );
}