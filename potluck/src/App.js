import './App.css';
import NavBar from './NavBar';
import HomeScreen from './HomeScreen';
import EventInfo from './EventInfo';
import EventCreationForm from './EventCreationForm';
import GuestContainer from './GuestContainer';
import {useState, useEffect} from 'react';
import ItemsToBring from './ItemsToBring';
import Photos from './Photos';
import EventEditForm from './EditEvent';
import { Switch, Route, useHistory } from 'react-router-dom';


function App() {
  const databaseURL = 'http://localhost:3001/events';
  const [allEvents, setAllEvents] = useState('');
  const [selectedEvent, setSelectedEvent] = useState([]);
  const [allGuest, setAllGuest] = useState(selectedEvent.guests);
  const [filteredGuest, setFilteredGuest] = useState(selectedEvent.guests);
  const [allEventPhotos, setAllEventPhotos] = useState(selectedEvent.photos)
  
  const history = useHistory();
      
  useEffect(() => {
    fetch(databaseURL)
    .then(res => res.json())
    .then(eventsData => setAllEvents(eventsData))
  }, [])
  
  //for retrieving event from API by codeword index
  function codeSubmit(e, eventCode) {
    e.preventDefault();

    const codeName = eventCode;
    console.log(eventCode);

    
    let filterResult = allEvents.filter(eventObj => eventObj.code === codeName)
    if (filterResult.length === 0) {
      alert(`Event '${codeName}' not found. Please try again or create a new event.`);
    } else {
      setSelectedEvent(filterResult[0]);
      setAllGuest(filterResult[0].guests);
      setFilteredGuest(filterResult[0].guests)
      setAllEventPhotos(filterResult[0].photos)
      history.push('/info');
    }
  }
  console.log(selectedEvent.id)

  function updateWithNewEvent(eventObj) {
    setSelectedEvent(eventObj);
    setAllGuest(eventObj.guests);
    setFilteredGuest(eventObj.guests)
    setAllEventPhotos(eventObj.photos)
    setAllEvents([...allEvents, eventObj]);
    history.push('/info');
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomeScreen codeSubmit={codeSubmit}/>
        </Route>
        <Route exact path="/info">
          <EventInfo eventObj={selectedEvent}/>
        </Route>
        <Route exact path="/createEvent">
          <EventCreationForm updateWithNewEvent={updateWithNewEvent}/>
        </Route>
        <Route exact path="/guests">
          <GuestContainer  allGuest={allGuest}
                            setAllGuest={setAllGuest}
                            filteredGuest={filteredGuest}
                            setFilteredGuest={setFilteredGuest}
                            event={selectedEvent}
                            eventId={selectedEvent.id}/>
        </Route>
        <Route exact path="/itemsToBring">
          <ItemsToBring selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent}/>
        </Route>
        <Route exact path="/photos">
          <Photos allEventPhotos={allEventPhotos} setAllEventPhotos={setAllEventPhotos} eventId={selectedEvent.id}/>
        </Route>
        <Route exact path="/editEvent">
          <EventEditForm event={selectedEvent} updateWithNewEvent={updateWithNewEvent}/>
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
