
function EventInfo({eventObj}) {
    console.log(eventObj);
    if (!eventObj) {
        return (
            <>
                <h2>STATIC element: this is the EVENTINFO component</h2>
                <p>You're seeing this because the event hasn't been selected/loaded yet.</p>
            </>
        )
    }
    let {name, time, date, description, location, guests, thingsToBring} = {...eventObj};
    console.log(name);
    console.log(time);

    return (
        <div id="eventInfo">
            <h2>DYNAMIC element: this it the EVENTINFO component.</h2>
            <p>This should contain a lot of the event subcomponents:</p>
            <h4>Name: {name}</h4>
            <p>Description: {description}</p>
            <p>Location: {location}</p>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
        </div>
    ) 
}

export default EventInfo;