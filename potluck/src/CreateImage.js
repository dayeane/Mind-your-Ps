import {useRef} from "react";
import { v4 as uuid } from 'uuid';


function CreateImage({ eventId, allEventPhotos, setAllEventPhotos}) {

  const id = useRef('')
  const name = useRef('')
  const url = useRef('')

  function handleNewPhoto(e) {
    e.preventDefault();

    if (eventId === 0) return alert ("please try again")

    const newPhoto = {
      id: uuid(),
      name: name.current.value,
      url: url.current.value,
    }

    console.log(eventId)
    fetch(`http://localhost:3001/events/${eventId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ photos: [...allEventPhotos,newPhoto] })
    })
    .then(res => res.json())
    .then(data => setAllEventPhotos(data.photos))

    e.currentTarget.reset()
  }
  
return(
<>
     <h2>Add New Photo</h2>
        <form onSubmit={handleNewPhoto}>

            <label>Name:</label>
            <input ref={name} type="text" id="name" name="name" />

            <label>Url:</label>
            <input ref={url} type="text" id="url" name="url" />

            <input type="submit" value="Add Photo"/>

        </form>
      </>


    )
    
}

export default CreateImage;