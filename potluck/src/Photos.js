import React from "react";
import CreateImage from "./CreateImage";

function Photos({eventId, allEventPhotos, setAllEventPhotos}) {
console.log(eventId)
    if (!allEventPhotos){ return <h2>..Please select and event from home page</h2> }
  
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