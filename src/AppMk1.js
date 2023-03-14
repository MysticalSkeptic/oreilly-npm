// demo said don't use this... import logo from './logo.svg';
import './App.css';
// styles from imported css files are scoped to this and all child components
// this App.css is imported via create-react-app, maybe a default 
import { Greeting } from './Greeting';
// import PersonnelList to pass personnel variable as argument
import { PersonnelList } from './PersonnelList';

// function for demo purpose
const giveAlert = () => {
  alert('You clicked me!');
}
// NOTE: the button below has onClick event onClick={giveAlert}
// react renders a function automatically when it encounters ()
// onClick={giveAlert()} functions just like calling the function by itself
// giveAlert(); react sees a function being called and executes the component

// hardcoding some data for displaying lists of components
// demo is objects with personal data
const personnel = [{
    name: 'Kyrsk Algrothum',
    duty: 'Assassin',
    kills: 109
}, {
  name: 'Kyrsk Dubori',
  duty: 'Assassin',
  kills: 23
}, {
  name: 'Thrakk Puurth',
  duty: 'Shuttle Maintenance',
  kills: 2
}, {
  name: 'Sular CThryyl',
  duty: 'Ambassador',
  kills: 1
}];

function App() {
  
  let url = 'https://reactjs.org';
  return (
    <div className="App">
      <header className="App-header">
        <p
          // styling example element
          style={{ color: 'pink', fontSize: '1.3rem' }}
        >
          This is a styling example...
        </p>
        <Greeting
          // pass object as prop: person={{ name: "Lord Glablok", numberOfConquests= 2235}}}
          // passes "person" object; outer {} surrounds any prop not a string
          // inner {} represents the object to be passed
          // deleted name to demonstrate conditions
          // name=""
          name="Lord Glablok"
          numberOfConquests={2781}
        />
        <PersonnelList 
          personnel={personnel}  
        />
        
        <button onClick={giveAlert}>First demo button</button>
        <button onClick={() =>alert('Second button clicked') }>Second demo button</button>
        <p>
          The Lord Glablok rules here!
        </p>
        <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
