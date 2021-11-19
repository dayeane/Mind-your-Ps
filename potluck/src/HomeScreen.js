import {useState} from 'react';
import { Link } from 'react-router-dom';

function HomeScreen({codeSubmit}) {

    const [eventCode, setEventCode] = useState('');
    const databaseURL = 'http://localhost:3001/events';

    function codeChange(e) {
        setEventCode(e.target.value);
    }

    return (
        <div className="card mt-5" id="HomeScreen">
            <div className="card header bg-light">
                <h2>Welcome to Potluck!</h2>
            </div>
            <form className="form mt-5" name='codeForm' onSubmit={(e) => codeSubmit(e, eventCode)}>
                <input onChange={codeChange} type='text' id='code' name='code' placeholder="Enter event code" value={eventCode}></input>
                <button  className="btn btn-primary" type='submit' id='codeSubmit' name='codeSubmit'>Submit Code</button>
            </form>
            <div className="col-12 mt-5">
                <Link to='/createEvent'><button className="btn btn-primary" type="Create New Event">Create New Event</button></Link>             
            </div>

        </div>
    )
}

export default HomeScreen;