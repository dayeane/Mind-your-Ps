
function EventInfo({eventObj}) {

    {name, time, date, description, location, guests, thingsToBring} = {eventObj};

    return (
        <div id="eventInfo">
            <h2>STATIC element: this it the EVENTINFO component.</h2>
            <p>This should contain a lot of the event subcomponents:</p>
            <ul>
                <li>Location</li>
                <li>Date</li>
                <li>Time</li>
                <li>Host</li>
                <li>Things you're bringing (if you've signed up for things, yet)</li>
                <li>A short list of things that still need to be brought</li>
                <li>A link to access the longer list of things to bring</li>
                <li>A quick-RSVP option</li>
                <li>More?</li>    
            </ul>
        </div>
        

    ) 
}

export default EventInfo;