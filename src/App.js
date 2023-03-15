import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HomePage, CounterButtonPage, PersonnelListPage } from './pages';

// import link from react-dom. using anchor <a></a> reloads the app when switching pages
// url and query parameters are info about the page contained in in the url
// url parameters: segments of url path such as .com/this/that/
// query parameters: after ? at end of url .com/search?q=this&that_thing
// can copy the url to replicate a search
// adding /: to the path allows using segments of url as url params
// removing the /: 
// <Route exact path="/counter/:name" element={ <CounterButtonPage /> } /> was original tutorial for useParams
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/counter">Counter Page </Link>
        <Link to="/personnel-list">Personnel Page</Link>
        <Routes>
          <Route exact path="/" element={ <HomePage /> } />
          <Route exact path="/counter" element={ <CounterButtonPage /> } />
          <Route exact path="/personnel-list" element={ <PersonnelListPage /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
