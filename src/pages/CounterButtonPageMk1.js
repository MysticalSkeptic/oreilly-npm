import { CounterButton } from '../CounterButton';
import { CongratsMsg } from '../CongratsMsg';
import { useState } from 'react';
// to use url parameters, import the following, then define one in route
import { useParams } from 'react-router-dom';

export const CounterButtonPage = () => {
  const [timesClicked, setTimesClicked] = useState(0);
  const increment = () => setTimesClicked(timesClicked + 1);
  const [hideMsg, setHideMsg] = useState(false);
  const { name } = useParams();
  // gets url parameter name as passed from app page
  return (
    <>
      <h1>My Counter Button Page</h1>
      <h3>Recognizing { name }</h3>
      {hideMsg ? null 
        : <CongratsMsg timesClicked={timesClicked} 
            triggerClicks={12} 
            onHide={() => setHideMsg(true)}/>} 
      <CounterButton onIncrement={increment} timesClicked={timesClicked} />        
    </>
  );
}