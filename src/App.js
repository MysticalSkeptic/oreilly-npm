import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HomePage, CounterButtonPage, PersonnelListPage } from './pages';

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
