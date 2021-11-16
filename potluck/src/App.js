// import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import HomeScreen from './HomeScreen';
import EventInfo from './EventInfo';
import EventCreationForm from './EventCreationForm';
import GuestContainer from './GuestContainer';


function App() {

  const event = {
    guests: [
      {
        id: 1,
        name: "Dayeane Cortes",
        email: "dayis@example.com",
        phone: "5554312244",
        confirm: "false"
      },
      {
        id: 2,
        name: "Dan LeFever",
        email: "dan@example.com",
        phone: "5554312245",
        confirm: "true"
      },
      {
        id: 3,
        name: "David Avery",
        email: "david@example.com",
        phone: "5554312249",
        confirm: "false"
      },
    ]
  }

  return (
    <div className="App">
      <h1>POTLUCK</h1>
      <p>Static element: this is the main app container</p>
      <NavBar />
      <HomeScreen />
      <EventInfo />
      <EventCreationForm />
      <GuestContainer guests={event.guests}/>
    </div>
  );
}

export default App;
