import {useState, useEffect} from 'react';


function EventCreationForm ({updateWithNewEvent}) {

    //this will fetch 3 random words for creating an event code-word
    let threeWords = '';
    const codeWordGenerator = 'https://random-word-api.herokuapp.com/word?number=3';
    const databaseURL = 'http://localhost:3001/events';
    
    useEffect(() => {
        fetch(codeWordGenerator)
        .then(res => res.json())
        .then(arrThreeWords => {
            threeWords = arrThreeWords.join('-');
            setFormData({...formData, code: threeWords})
            console.log(threeWords);
        })
    }, []);
    
    

    const [formData, setFormData] = useState({
        name:'',
        date:'',
        time:'',
        description:'',
        theme:'',
        dressCode:'',
        inviteStructure:'',
        code: '',
        location: '',
        guests: [],
        thingsToBring: [],
        pictures: []
    })

    function formChangeHandler(e) {
        const name = e.target.name;
        const val = e.target.value;

        setFormData({...formData, [name]: val});
    }

    function formSubmitHandler(e) {
        e.preventDefault();
        
        const postConfig = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(formData)
        }

        fetch(databaseURL, postConfig)
        .then(res => res.json())
        .then(eventObj => updateWithNewEvent(eventObj))
        

        setFormData({
            name:'',
            date:'',
            time:'',
            description:'',
            theme:'',
            dressCode:'',
            inviteStructure:'',
            location: '',
            guests: [],
            thingsToBring: [],
            pictures: []
        });
    }
    
    return (
        <form onSubmit={(e) => formSubmitHandler(e)} name='newEventForm' id='newEventForm'>
            <label for='eventName'>Event name:</label>
            <input type='text' id='eventName' value={formData.name} onChange={formChangeHandler} name='name'></input>
            <label for='eventDate'>Event date:</label>
            <input type='date' id='eventDate' name='date' value={formData.date} onChange={formChangeHandler}></input>
            <label for='eventTime'>Event time:</label>
            <input type='time' id='eventTime' name='time' value={formData.time} onChange={formChangeHandler}></input>
            <label for='eventDescription'>Event description:</label>
            <input type='text' id='eventDescription' name='description' value={formData.description} onChange={formChangeHandler}></input>
            <label for='eventTheme'>Event theme:</label>
            <input type='text' id='eventTheme' name='theme' value={formData.theme} onChange={formChangeHandler}></input>
            <label for='eventDressCode'>Event dress code: </label>
            <select id='eventDressCode' name='dressCode' value={formData.dressCode} onChange={formChangeHandler}>
                <option value='formal'>Formal</option>
                <option value='casual'>Casual</option>
                <option value='holiday'>Holiday</option>
                <option value='themed'>Themed/Costume</option>
                <option value='pool'>Pool/Beach</option>
                <option value='pajamas'>Pajamas</option>
                <option value='other'>Other</option>
            </select>
            <label for='eventInviteStructure'>Event invite structure:</label>
            <select id='eventInviteStructure' name='inviteStructure' value={formData.inviteStructure} onChange={formChangeHandler}>
                <option value='plus one'>Plus one</option>
                <option value='invite only'>Invite only</option>
                <option value='bring your friends'>Bring your friends!</option>
            </select>
            <label for='eventLocation'>Location: </label>
            <input type='text' id='eventLocation' name='location' value={formData.location} onChange={formChangeHandler}></input>
            <button type='submit' id='submit' name='submit'>Party!</button>
        </form>
    )
}

export default EventCreationForm;