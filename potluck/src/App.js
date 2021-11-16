import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import HomeScreen from './HomeScreen';
import EventInfo from './EventInfo';
import EventCreationForm from './EventCreationForm';

function App() {
  return (
    <div className="App">
      <h1>POTLUCK</h1>
      <p>Static element: this is the main app container</p>
      <NavBar />
      <HomeScreen />
      <EventInfo />
      <EventCreationForm />
    </div>
  );
}

export default App;
