import './App.css';
import NavBar from './NavBar';
import HomeScreen from './HomeScreen';
import EventInfo from './EventInfo';
import EventCreationForm from './EventCreationForm';
import GuestContainer from './GuestContainer';
import {useState, useEffect} from 'react';
import ItemsToBring from './ItemsToBring'


function App() {
  const databaseURL = 'http://localhost:3001/events';
  const emptyEvent =  {
    id: 0,
    code: "",
    name: "",
    date: "",
    time: "",
    description: "",
    theme: "",
    dressCode: "",
    inviteStructure: "",
    guests: [],
    thingsToBring: [],
    pictures: []
}
  const [allEvents, setAllEvents] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(emptyEvent);

  
  useEffect(() => {
    fetch(databaseURL)
    .then(res => res.json())
    .then(eventsData => setAllEvents(eventsData))
    }, [])
  function codeSubmit(e, eventCode) {
    e.preventDefault();
    const codeName = eventCode;
    console.log(eventCode);
    let filterResult = allEvents.filter(eventObj => eventObj.code === codeName)
    if (filterResult.length === 0) {
      alert(`Event '${codeName}' not found. Please try again or create a new event.`);
    } else {
      alert('Event found! Loaded into event manager :)');
      setSelectedEvent(filterResult[0]);
    }
  }

 
  
  return (
    <div className="App">
      <h1>POTLUCK</h1>
      <p>Static element: this is the main app container</p>
      <NavBar />
      <HomeScreen codeSubmit={codeSubmit}/>
      <EventInfo />
      <EventCreationForm />
      <GuestContainer guests={selectedEvent.guests} eventId={selectedEvent.eventId}/>
      <ItemsToBring />
    </div>
  );
}

export default App;
