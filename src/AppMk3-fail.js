import './App.css';
import { Greeting } from './Greeting';
import { CongratsMsg } from './CongratsMsg';
import { CounterButton } from './CounterButton';
import { PersonnelList } from './PersonnelList';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// the next import possible bc used index.js in pages folder to export the pages
// otherwise needs separate lines for each page in the folder
import { HomePage, CounterButtonPage, PersonnelListPage } from './pages';


function App() {
  const [timesClicked, setTimesClicked] = useState(0);
  const increment = () => setTimesClicked(timesClicked + 1);
  const [hideMsg, setHideMsg] = useState(false);
  // a <Router></Router> contains all the Route objects
  // <Route></Route> components have a path prop
  // "home page" or desired default page prop is path="/"
  // when url matches path, components of page displayed (like all routing)
  // adding exact prop to a Route specifies the component will only render when
  // the route in the url EXACTLY matches the specified path attribute value
  // in the below case, HomePage will only render if the url ends with exactly /
  // <PageName /> components within a specific <Route></Route> parent are displayed
  // when the path prop value is in url
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/counter">
          <CounterButtonPage />
        </Route>
        <Route path="/personnel-list">
          <PersonnelListPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
