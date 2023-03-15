import { CounterButton } from '../CounterButton';
import { CongratsMsg } from '../CongratsMsg';
import { useState } from 'react';
// to use url parameters, import the following (version corrections by prof)
// this removed at end of tutorial import { useParams, useLocation } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
// note: npm install query-string

export const CounterButtonPage = () => {
  // final version of lesson 3.2 code here?
  const pageLocation = useLocation();
  const initialValue = queryString.parse(pageLocation.search).initialValue;

  // force useState to be a number since it's reading from the url string
  // make sure initialValue is listed before it's called...
  const [timesClicked, setTimesClicked] = useState(Number(initialValue));
  const increment = () => setTimesClicked(timesClicked + 1);
  const [hideMsg, setHideMsg] = useState(false);

  // removed at end of tutorial
  // const { name } = useParams(); which allowed using the :name from App
  
  

  // had placed <h3>Recognizing {name}</h3> for useParams version...

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