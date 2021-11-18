
import {useRef} from 'react'
import { v4 as uuid } from 'uuid';

function GuestCreateForm({eventId, allGuest, setAllGuest, setFilteredGuest}) {

    const name = useRef('')
    const email = useRef('')
    const phone = useRef('')
    const confirm = useRef('false')

    function handleNewGuestSubmit(e) {
        e.preventDefault();

        if (eventId === 0) return alert("Please select an event")

        const newGuest = {
            id: uuid(),
            name: name.current.value,
            email: email.current.value,
            phone: phone.current.value,
            confirm: confirm.current.value,
        }
        

        fetch(`http://localhost:3001/events/${eventId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ guests: [...allGuest, newGuest] })
        })
        .then(res => res.json())
        .then(data => {
            setAllGuest(data.guests)
            setFilteredGuest(data.guests)
        })

        e.currentTarget.reset()
    }

    return(
        <>
          <div class="card col-12 mt-5 mb-2" >
         <div class="card-header"><h2>Add a New Guest</h2></div>
           <form onSubmit={handleNewGuestSubmit}>
               
               <label>Name:</label>
               <input  ref={name} type="text" id="name" name="name" />
   
               <label>Email:</label>
               <input  ref={email} type="text" id="email" name="email" />
   
               <label>Phone:</label>
               <input  ref={phone} type="text" id="phone" name="phone" />

               <label>Its Confirmed?:</label>

                <select ref={confirm}  name="confirm" id="confirm">
                    <option value="true">true</option>
                    <option value="false">false</option>
                </select>
              
               <input type="submit" value="Add Guest"/>

           </form>
           </div>
         </>
       )
}

export default GuestCreateForm;