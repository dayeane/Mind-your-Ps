import react, {useState}  from "react"
import { v4 as uuid } from 'uuid';

function AddItem ( {itemList, selectedEvent, setSelectedEvent, setShownItems}) {

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
            setShownItems(data.thingsToBring)
        })
    
    }   

    return (
      <div className="row mt-5">
        <h2 className="col-12">Add an Item</h2>
        <div className= "col-12">
            <form onSubmit={handleSubmit}>
                <div className= "col-12">
                    <input placeholder="item" onChange={handleChange} value={formData.item} type="text" name="item"/>
                    <input placeholder="category" onChange={handleChange} value={formData.category} type="text" name="category"/>
                    <input placeholder="claim" onChange={handleChange} value={formData.claimer} type="text" name="claimer"/>
                </div>
                <button className="btn btn-primary mb-5 mt-4" type="submit">
                    Add Item
                </button>
            </form>
        </div>
      </div>
    )
}

export default AddItem