import react, {useState}  from "react"

function AddItem ( {handleFormSubmit}) {
   
    const [formData, setFormData] = useState ({
        item:"",
        category:"",
        claimer:"",
    })

    function handleChange (e) {
        setFormData({formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(){


    }   

    return (
      <>
        <h2>Here is a form to add an item</h2>
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="item">Item</label>
                    <input onchange={handleChange} value={formData.item} type="text" name="item"/>
                    <label for="category">Category</label>
                    <input onchange={handleChange} value={formData.category} type="text" name="category"/>
                    <label for="claimer">Owner</label>
                    <input onchange={handleChange} value={formData.claimer} type="text" name="claimer"/>
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