
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
          <div className="card col-12 mt-5 mb-2" >
         <div className="card-header"><h2>Add a New Guest</h2></div>
           <form onSubmit={handleNewGuestSubmit}>
               
               <label></label>
               <input  placeholder="Name" ref={name} type="text" id="name" name="name" />
   
               <label></label>
               <input  placeholder="Email" ref={email} type="text" id="email" name="email" />
   
               <label></label>
               <input  placeholder="Phone" ref={phone} type="text" id="phone" name="phone" />

               <label> Confirmed</label>

                <select ref={confirm}  name="confirm" id="confirm">
                    <option value="true">true</option>
                    <option value="false">false</option>
                </select>

                <div>
                <table className="table table-striped"></table>
               <input className=" btn btn-primary row col-2 mt-3 mb-3" type="submit" value=" Add Guest "/>
               </div>
           </form>
           </div>
         </>
       )
}

export default GuestCreateForm;