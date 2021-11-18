import React from "react";
import CreateImage from "./CreateImage";

function Photos({eventId, allEventPhotos, setAllEventPhotos}) {
console.log(eventId)
    if (!allEventPhotos){ return <h2>..Please select and event from home page</h2> }
  
    const photoList = allEventPhotos.map((photo)=> <img key={photo.id}src={photo.url} alt={photo.name} width="300" height="200" /> )

   
    return (
    <>
        <h1>Best Memories</h1>
        <CreateImage eventId={eventId} setAllEventPhotos={setAllEventPhotos} allEventPhotos={allEventPhotos} />
        <div>
          {photoList}
        </div>
  </>
    )
  };



export default Photos;