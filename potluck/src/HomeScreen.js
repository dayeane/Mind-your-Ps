import {useState} from 'react';
import { Link } from 'react-router-dom';

function HomeScreen({codeSubmit}) {

    const [eventCode, setEventCode] = useState('');
    const databaseURL = 'http://localhost:3001/events';

    function codeChange(e) {
        setEventCode(e.target.value);
    }

    return (
        <div id="HomeScreen">
            <h2>HOME</h2>

            <form name='codeForm' onSubmit={(e) => codeSubmit(e, eventCode)}>
                <label for='code'>Event code:</label>
                <input onChange={codeChange} type='text' id='code' name='code' value={eventCode}></input>
                <button type='submit' id='codeSubmit' name='codeSubmit'>Submit Code</button>
            </form>
            <p></p>
            <Link to='/createEvent'>Create New Event</Link>

        </div>
    )
}

export default HomeScreen;