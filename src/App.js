import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HomePage, CounterButtonPage, PersonnelListPage, NotFoundPage, ProtectedPage, ControlledFormPage, UncontrolledFormPage } from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/counter">Counter Page    </Link>
        <Link to="/personnel-list">Personnel Page    </Link>
        <Link to="/">Take Me Home    </Link>
        <Link to='/control-form'>I Will Submit    </Link>
        <Link to='/uncontrol-form'>Chaos Form</Link>
        <Routes>
          <Route exact path="/" element={ <HomePage /> } />
          <Route exact path="/counter" element={ <CounterButtonPage /> } />
          <Route exact path="/personnel-list" element={ <PersonnelListPage /> } />
          <Route exact path="/protected" element={ <ProtectedPage /> } />
          <Route exact path="/control-form" element={ <ControlledFormPage /> } />
          <Route exact path="uncontrol-form" element={ <UncontrolledFormPage />} />
          <Route path="*" element={ <NotFoundPage /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
