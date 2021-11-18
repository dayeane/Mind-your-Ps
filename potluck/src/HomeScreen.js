import {useState} from 'react';
import { Link } from 'react-router-dom';

function HomeScreen({codeSubmit}) {

    const [eventCode, setEventCode] = useState('');
    const databaseURL = 'http://localhost:3001/events';

    function codeChange(e) {
        setEventCode(e.target.value);
    }

    return (
        <div className="row" id="HomeScreen">
            <h2 class=" col-3">HOME</h2>
            <form class=" col-9" name='codeForm' onSubmit={(e) => codeSubmit(e, eventCode)}>
                <label for='code'>Event code:</label>
                <input onChange={codeChange} type='text' id='code' name='code' value={eventCode}></input>
                <button type='submit' id='codeSubmit' name='codeSubmit'>Submit Code</button>
            </form>
            <div className="col-12">
                <Link to='/createEvent'>Create New Event</Link>
            </div>

        </div>
    )
}

export default HomeScreen;