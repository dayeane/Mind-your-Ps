
function EventInfo({eventObj}) {
    console.log(eventObj);
    if (eventObj?.code === undefined) {
        return (
            <>
                <h2>EVENTINFO</h2>
                <p>Please either select an event with your event code or create a new event to manage :)</p>
            </>
        )
    }
    let {name, time, code, date, description, location, guests, thingsToBring} = {...eventObj};
    
    return (
        <div id="eventInfo">
            <h2>EVENT INFO</h2>
            <h4>Name: {name}</h4>
            <p>Event code: {code}</p> 
            <p>Description: {description}</p>
            <p>Location: {location}</p>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
        </div>
    ) 
}

export default EventInfo;