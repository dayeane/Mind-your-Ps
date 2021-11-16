import {useState} from 'react';

function HomeScreen({codeSubmit}) {

    const [eventCode, setEventCode] = useState('');
    const databaseURL = 'http://localhost:3001/events';

    function codeChange(e) {
        setEventCode(e.target.value);
    }

    /*
    function codeSubmit(e) {
        e.preventDefault();
        console.log("I see the code submission");

    }
    */

    return (
        <div id="HomeScreen">
            <h2>STATIC element: this is the 'Home' screen.</h2>
            <p>It should essentially be the 'landing' point when you first enter the potluck app.</p>
            <p>It should have an input field for your event 'code', or a button to go to 'Create New Event'</p>
            <p>After loading an event (or creating an event), the Home screen should pretty much not exist (unless the site is reloaded)</p>

            <form name='codeForm' onSubmit={(e) => codeSubmit(e, eventCode)}>
                <label for='code'>Event code:</label>
                <input onChange={codeChange} type='text' id='code' name='code' value={eventCode}></input>
                <button type='submit' id='codeSubmit' name='codeSubmit'>Submit Code</button>
            </form>
            <p></p>
            <button>Create New Event</button>

        </div>
    )
}

export default HomeScreen;