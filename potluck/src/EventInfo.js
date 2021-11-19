import {useHistory} from "react-router-dom";
function EventInfo({eventObj}) {
    const history = useHistory();
    
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
            <h4>Name: {name}</h4>
            <p>Event code: {code}</p> 
            <p>Description: {description}</p>
            <p>Theme: {theme}</p>
            <p>Location: {location}</p>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
            <p>Invite: {inviteStructure}</p>
            <p>Dress code: {dressCode}</p>
            <button className="btn btn-primary row col-1 align-self-center" onClick={() => history.push('/editEvent')}>Edit Event</button>
        </div>
    ) 
}

export default EventInfo;