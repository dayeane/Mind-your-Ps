import React from "react";

function Photos({allEventPhotos}) {
    if (!allEventPhotos){ return <h2>..Please select and event from home page</h2> }
  
    const photoList = allEventPhotos.map((photo)=> <img key={photo.id}src={photo.url} alt={photo.name} width="300" height="200" /> )


    return (
    <>
        <h1>Best Memories</h1>
        <tbody>
          {photoList}
        </tbody>
  </>
    )
};


export default Photos;