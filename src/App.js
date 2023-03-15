import './App.css';
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';
import { 
  HomePage, 
  CounterButtonPage, 
  PersonnelListPage, 
  NotFoundPage, 
  ProtectedPage, 
  ControlledFormPage, 
  UncontrolledFormPage, 
  UserProfilePage 
} from './pages';
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
            <Route exact path="/personnel" element={ <PersonnelListPage /> } />
            <Route exact path="/protected" element={ <ProtectedPage /> } />
            <Route exact path="/user" element={ <UserProfilePage /> } />
            <Route path="/forms" element={ <FormNav />} />
              <Route exact path="/forms/control" element={ <ControlledFormPage /> } />
              <Route exact path="/forms/chaos" element={ <UncontrolledFormPage />} />
            <Route path="*" element={ <NotFoundPage /> } />
          </Routes>
        </div>        
      </BrowserRouter>
    </div>
  );
}

export default App;
