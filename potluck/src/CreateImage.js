import React from "react";

function CreateImage(params) {

return(
<>
     <h2>Photo Upload</h2>
        <form>
            <label>id:</label>
            <input type="text" id="id" name="id" />

            <label>Name:</label>
            <input   type="text" id="name" name="name" />

            <label>Url:</label>
            <input type="text" id="url" name="url" />

            <btn>Upload</btn>

        </form>
      </>


    )
    
}

export default CreateImage;