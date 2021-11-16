import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import HomeScreen from './HomeScreen';
import EventInfo from './EventInfo';

function App() {
  return (
    <div className="App">
      <h1>POTLUCK</h1>
      <p>Static element: this is the main app container</p>
      <NavBar />
      <HomeScreen />
      <EventInfo />
    </div>
  );
}

export default App;
