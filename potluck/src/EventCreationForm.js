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
        photos: []
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
        <div className="card mt-5" >
            <div className="card header bg-light">
                <h2>New Event</h2>
            </div>
            <form onSubmit={(e) => formSubmitHandler(e)} name='newEventForm' id='newEventForm'>
                <div className="form-group mt-4">
                    <label htmlFor='eventName'></label>
                    <input placeholder= "Event name"type='text' id='eventName' value={formData.name} onChange={formChangeHandler} name='name'/>
                </div>

                <div className="form-group mt-4">  
                    <label htmlFor='eventDate '></label>
                    <input placeholder="Event date" type='date' id='eventDate' name='date' value={formData.date} onChange={formChangeHandler}/>
                </div> 

                <div className="form-group mt-4">
                    <label htmlFor='eventTime'>Event time:</label>
                    <input placeholder = "Event time" type='time' id='eventTime' name='time' value={formData.time} onChange={formChangeHandler}/>
                </div>

                <div className="form-row">
                    <div className="form-group mt-4">
                        <textarea placeholder="Event description" type='text' id='eventDescription' name='description' value={formData.description} onChange={formChangeHandler}></textarea> 
                        
                    </div> 
                        
                    <div className="form-group mt-4"> 
                        <textarea placeholder="Event theme" type='text' id='eventTheme' name='theme' value={formData.theme} onChange={formChangeHandler}></textarea>
                    </div>   
                </div>
                    

                <div className=" form-group mt-4">
                    <label htmlFor='eventDressCode'>Event dress code: </label>
                    <select id='eventDressCode' name='dressCode' value={formData.dressCode} onChange={formChangeHandler}>
                        <option value='formal'>Formal</option>
                        <option value='casual'>Casual</option>
                        <option value='holiday'>Holiday</option>
                        <option value='themed'>Themed/Costume</option>
                        <option value='pool'>Pool/Beach</option>
                        <option value='pajamas'>Pajamas</option>
                        <option value='other'>Other</option>
                    </select>
                </div>
                <div className=" form-group mt-4">
                    <label htmlFor='eventInviteStructure'>Event invite structure:</label>
                    <select id='eventInviteStructure' name='inviteStructure' value={formData.inviteStructure} onChange={formChangeHandler}>
                        <option value='plus one'>Plus one</option>
                        <option value='invite only'>Invite only</option>
                        <option value='bring your friends'>Bring your friends!</option>
                    </select>
                </div>
                <div className=" form-group mt-4">
                    <label htmlFor='eventLocation'> </label>
                    <input placeholder="location" type='text' id='eventLocation' name='location' value={formData.location} onChange={formChangeHandler}></input>
                </div>
                <button className="btn btn-primary mt-3 mb-3" type='submit' id='submit' name='submit'>Party!</button>
            </form>
        </div>
    )
}

export default EventCreationForm;