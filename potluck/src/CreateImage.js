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
     <h2> New Photo</h2>
        <form onSubmit={handleNewPhoto}>
            <div class="form-group">
                <label></label>
                <input placeholder="Name" className="form-control"  ref={name} type="text" id="name" name="name" />
            </div>
            <div class="form-group">
              <label></label>
              <input placeholder="URL" className="form-control"  ref={url} type="text" id="url" name="url" />
            </div>

            <button  className="btn btn-info" type="submit" value="Add Photo">submit</button>

        </form>
      </>


    )
    
}

export default CreateImage;