import { CounterButton } from '../CounterButton';
import { CongratsMsg } from '../CongratsMsg';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

export const CounterButtonPage = () => {

  const pageLocation = useLocation();
  const initialValue = queryString.parse(pageLocation.search).initialValue;

  const [timesClicked, setTimesClicked] = useState(Number(initialValue));
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