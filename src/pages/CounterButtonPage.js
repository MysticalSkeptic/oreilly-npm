import { CounterButton } from '../CounterButton';
import { CongratsMsg } from '../CongratsMsg';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { DisplayIf } from '../DisplayIf';

export const CounterButtonPage = () => {

  const pageLocation = useLocation();
  const initialValue = queryString.parse(pageLocation.search).initialValue || 0;

  const [timesClicked, setTimesClicked] = useState(Number(initialValue));
  const increment = () => setTimesClicked(timesClicked + 1);
  const [hideMsg, setHideMsg] = useState(false);

  // DisplayIf comp takes the work of display/hide message out of CounterButton
  // take out number clicks prop...

  return (
    <>
      <h1>My Counter Button Page</h1>
      <DisplayIf condition={!hideMsg && timesClicked >= 12}>
        <CongratsMsg
            triggerClicks={12} 
            onHide={() => setHideMsg(true)}/> 
      </DisplayIf>
      
      <CounterButton onIncrement={increment} timesClicked={timesClicked} />        
    </>
  );
}