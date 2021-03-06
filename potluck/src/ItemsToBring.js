import react, {useState, useEffect} from "react"
import ItemContainer from "./ItemContainer.js"
import AddItem from "./AddItem.js"

function ItemsToBring ({selectedEvent, setSelectedEvent}) {
    const [shownItems, setShownItems] = useState(selectedEvent.thingsToBring)
    
    if (selectedEvent.length === 0) {
        return (
            <div className="card mt-5">
                <h2 className="card-header">Items to bring</h2>
                <p>Please either select an event with your event code or create a new event to manage</p>
            </div>
        )
    }
        

    function handleDelete(id) {
        const updatedItemList= shownItems.filter((itemObj)=> itemObj.id !== id)  
        fetch(`http://localhost:3001/events/${selectedEvent.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({thingsToBring: updatedItemList})
        })
        .then(res=> res.json())
        .then((data)=> {
            console.log(data)
            setShownItems(data.thingsToBring)
            setSelectedEvent(data)
        })
    }

    function handleClaimItem(newClaimer) {
        console.log(newClaimer)
    }

    return (
        <>
            <div className="card row mt-5">
                <div className="card-header"><h2>Items we need!</h2></div>
                <AddItem itemList={shownItems} setSelectedEvent={setSelectedEvent} selectedEvent={selectedEvent} setShownItems={setShownItems}/>
            </div>
            <div>
                <ItemContainer handleClaimItem= {handleClaimItem} 
                            shownList= {shownItems}
                            setShownItems= {setShownItems}
                            selectedEvent={selectedEvent}
                            setSelectedEvent={setSelectedEvent}
                            handleDelete={handleDelete}/>
            </div>
        </>
        )
    }

export default ItemsToBring