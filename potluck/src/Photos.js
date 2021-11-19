import React from "react";
import CreateImage from "./CreateImage";

function Photos({eventId, allEventPhotos, setAllEventPhotos}) {
  
  //console.log(eventId)
    if (!allEventPhotos) {
      return (
        <div className="card mt-5">
                <h2 className="card-header">Photo album</h2>
                <p>Please either select an event with your event code or create a new event to manage</p>
            </div>
      )
    }
  
    const photoList = allEventPhotos.map((photo)=> <img className="m-2" key={photo.id}src={photo.url} alt={photo.name} width="300" height="200" /> )

   
    return (
      <>
      <div className="card row mt-5">
        <div className="card-header"><h2>Best Memories</h2></div>
        <CreateImage eventId={eventId} setAllEventPhotos={setAllEventPhotos} allEventPhotos={allEventPhotos} />
      </div>
      <div className="mt-5">
        {photoList}
      </div>
    </>
    )
  };



export default Photos;