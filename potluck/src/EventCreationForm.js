import {useState, useEffect} from 'react';


function EventCreationForm () {

    //this will fetch 3 random words for creating an event code-word
    let threeWords = '';
    const codeWordGenerator = 'https://random-word-api.herokuapp.com/word?number=3';
    const databaseURL = 'http://localhost:3000/events';
    
    useEffect(() => {
        fetch(codeWordGenerator)
        .then(res => res.json())
        .then(arrThreeWords => {
            threeWords = arrThreeWords.join('-');
            setFormData({...formData, code: threeWords})
            console.log(threeWords);
        })
    }, [])
    
    

    const [formData, setFormData] = useState({
        eventName:'',
        eventDate:'',
        eventTime:'',
        eventDescription:'',
        eventTheme:'',
        eventDressCode:'',
        eventInviteStructure:'',
        code: '',
    })

    function formChangeHandler(e) {
        const name = e.target.name;
        const val = e.target.value;

        setFormData({...formData, [name]: val});
    }

    function formSubmitHandler(e) {
        e.preventDefault();
        console.log("I see that you're trying to submit the form.");
        console.log("DAVERY NOTE: This submission handler is intended to hookup to a POST-fetch at some point.");
        console.log("(so don't forget)");
        console.log("Until then - here's the form data: ");
        console.log(formData);

        const postConfig = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(formData)
        }

        fetch(databaseURL, postConfig)
        .then(res => res.json())
        .then(eventObj => {
            console.log(eventObj);
            //This needs to be sent to state upstream to be the event that's loaded for all of the other app functionality
        })

        setFormData({
            eventName:'',
            eventDate:'',
            eventTime:'',
            eventDescription:'',
            eventTheme:'',
            eventDressCode:'',
            eventInviteStructure:'',
        });
    }
    //form essentials:
    // event name, event theme/type, food items to bring?(other form, probably?), non-food items to bring?, event description
    // event start time, event location, event end time, dress code, invite structure (plus-one, invite-only, bring your friends)


    return (
        <form onSubmit={(e) => formSubmitHandler(e)} onChange={formChangeHandler} name='newEventForm' id='newEventForm'>
            <label for='eventName'>Event name:</label>
            <input type='text' id='eventName' value={formData.eventName} name='eventName'></input>
            <label for='eventDate'>Event date:</label>
            <input type='date' id='eventDate' name='eventDate' value={formData.eventDate}></input>
            <label for='eventTime'>Event time:</label>
            <input type='time' id='eventTime' name='eventTime' value={formData.eventTime}></input>
            <label for='eventDescription'>Event description:</label>
            <input type='text' id='eventDescription' name='eventDescription' value={formData.eventDescription}></input>
            <label for='eventTheme'>Event theme:</label>
            <input type='text' id='eventTheme' name='eventTheme' value={formData.eventTheme}></input>
            <label for='eventDressCode'>Event dress code: </label>
            <select id='eventDressCode' name='eventDressCode' value={formData.eventDressCode}>
                <option value='formal'>Formal</option>
                <option value='casual'>Casual</option>
                <option value='holiday'>Holiday</option>
                <option value='themed'>Themed/Costume</option>
                <option value='pool'>Pool/Beach</option>
                <option value='pajamas'>Pajamas</option>
                <option value='other'>Other</option>
            </select>
            <label for='eventInviteStructure'>Event invite structure:</label>
            <select id='eventInviteStructure' name='eventInviteStructure' value={formData.inviteStructure}>
                <option value='plus one'>Plus one</option>
                <option value='invite only'>Invite only</option>
                <option value='bring your friends'>Bring your friends!</option>
            </select>
            <button type='submit' id='submit' name='submit'>Party!</button>
        </form>

    )
}

export default EventCreationForm;