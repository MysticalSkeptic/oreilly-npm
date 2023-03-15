import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, CounterButtonPage, PersonnelListPage, NotFoundPage, ProtectedPage, ControlledFormPage, UncontrolledFormPage } from './pages';
// now to import nav bar...
import { NavBar } from './NavBar';
import { FormNav } from './FormNav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="App-header">
          <Routes>
            <Route exact path="/" element={ <HomePage /> } />
            <Route exact path="/counter" element={ <CounterButtonPage /> } />
            <Route exact path="/personnel-list" element={ <PersonnelListPage /> } />
            <Route exact path="/protected" element={ <ProtectedPage /> } />
            <Route path="/forms" element={ <FormNav />} />
              <Route exact path="/forms/control-form" element={ <ControlledFormPage /> } />
              <Route exact path="/forms/uncontrol-form" element={ <UncontrolledFormPage />} />
            <Route path="*" element={ <NotFoundPage /> } />
          </Routes>
        </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
