import react, {useState}  from "react"

function AddItem ( {handleFormSubmit, itemsList, fullData}) {

    const {id} = fullData[0]

    console.log(id)
    
   
    const [formData, setFormData] = useState ({
        id:"",
        item:"",
        category:"",
        claimer:"",
    })

    function handleChange (e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()

        const updatedList= [...itemsList, formData] 
        const patchObj= {thingsToBring: updatedList}

        fetch (`http://localhost:3001/events/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(patchObj)
        } )
        .then(res => res.json())
        .then((data)=>handleFormSubmit(data))
    
    }   

    return (
      <>
        <h2>Here is a form to add an item</h2>
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="item">Item</label>
                    <input onChange={handleChange} value={formData.item} type="text" name="item"/>
                    <label for="category">Category</label>
                    <input onChange={handleChange} value={formData.category} type="text" name="category"/>
                    <label for="claimer">Owner</label>
                    <input onChange={handleChange} value={formData.claimer} type="text" name="claimer"/>
                </div>
                <button type="submit">
                    Add Item
                </button>
            </form>
        </div>
      </>
    )
}

export default AddItem