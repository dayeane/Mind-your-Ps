
function EventInfo({eventObj}) {
    console.log(eventObj);
    if (eventObj?.code === undefined) {
        return (
            <div className="card mt-5">
                <h2 className="card-header">EVENT INFO</h2>
                <p>Please either select an event with your event code or create a new event to manage</p>
            </div>
        )
    }
    let {name, time, code, date, description, theme, location, inviteStructure, dressCode} = {...eventObj};
    
    return (
        <div className="card mt-5" id="eventInfo">
            <div className="card-header"><h2>EVENT INFO</h2></div>
            <h4> <strong>Name</strong>: {name}</h4>
            <p> <strong>Event Code</strong>: {code}</p> 
            <p> <strong>Description</strong>: {description}</p>
            <p> <strong>Theme</strong>: {theme}</p>
            <p> <strong>Location</strong>: {location}</p>
            <p> <strong>Date</strong>: {date}</p>
            <p> <strong>Time</strong>: {time}</p>
            <p> <strong>Invite</strong>: {inviteStructure}</p>
            <p> <strong>Dress Code</strong>: {dressCode}</p>
        </div>
    ) 
}

export default EventInfo;