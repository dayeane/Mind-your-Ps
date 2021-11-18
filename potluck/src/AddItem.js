import react, {useState}  from "react"
import { v4 as uuid } from 'uuid';

function AddItem ( {itemList, selectedEvent, setSelectedEvent, seteShownItems}) {

    const [formData, setFormData] = useState ({
        item:"",
        category:"",
        claimer:"",
    })

    function handleChange (e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()

        const newItem= {
            id: uuid(),
            item: formData.item,
            category: formData.category,
            claimer: formData.claimer
        }

        console.log(itemList)
        
        fetch (`http://localhost:3001/events/${selectedEvent.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({thingsToBring: [...itemList, newItem]})
        })
        .then(res => res.json())
        .then((data)=>{
            setSelectedEvent(data)
            seteShownItems(data.thingsToBring)
        })
    
    }   

    return (
      <>
        <h2>Here is a form to add an item</h2>
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="item">Item</label>
                    <input onChange={handleChange} value={formData.item} type="text" name="item"/>
                    <label htmlFor="category">Category</label>
                    <input onChange={handleChange} value={formData.category} type="text" name="category"/>
                    <label htmlFor="claimer">Owner</label>
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