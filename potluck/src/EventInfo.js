
function EventInfo({eventObj}) {
    console.log(eventObj);
    if (eventObj?.code === undefined) {
        return (
            <>
                <h2>EVENT INFO</h2>
                <p>Please either select an event with your event code or create a new event to manage :)</p>
            </>
        )
    }
    let {name, time, code, date, description, location, inviteStructure, dressCode} = {...eventObj};
    
    return (
        <div class="card" id="eventInfo">
            <div class="card-header"><h2>EVENT INFO</h2></div>
            
            <h4>Name: {name}</h4>
            <p>Event code: {code}</p> 
            <p>Description: {description}</p>
            <p>Location: {location}</p>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
            <p>Invite: {inviteStructure}</p>
            <p>Dress code: {dressCode}</p>
        </div>
    ) 
}

export default EventInfo;