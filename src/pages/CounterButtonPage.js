import { CounterButton } from '../CounterButton';
import { CongratsMsg } from '../CongratsMsg';
import { useState } from 'react';
// to use url parameters, import the following v(ersion corrections by prof)
import { useParams, useLocation } from 'react-router-dom';
import queryStirng from 'query-string';
// note: must npm install query-string

export const CounterButtonPage = () => {
  const [timesClicked, setTimesClicked] = useState(0);
  const increment = () => setTimesClicked(timesClicked + 1);
  const [hideMsg, setHideMsg] = useState(false);
  
  // final version of lesson 3.2 code here?
  const pageLocation = useLocation();
  const initialValue = queryString.parse(location.search).initialValue;

  return (
    <>
      <h1>My Counter Button Page</h1>
      <h3>Recognizing {name}</h3>
      {hideMsg ? null 
        : <CongratsMsg timesClicked={timesClicked} 
            triggerClicks={12} 
            onHide={() => setHideMsg(true)}/>} 
      <CounterButton onIncrement={increment} timesClicked={timesClicked} />        
    </>
  );
}