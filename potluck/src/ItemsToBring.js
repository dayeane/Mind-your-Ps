import react, {useState, useEffect} from "react"
import ItemContainer from "./ItemContainer.js"
import AddItem from "./AddItem.js"

function ItemsToBring ({selectedEvent, setSelectedEvent}) {
    
    // const itemList=selectedEvent.thingsToBring

    // console.log(itemList)

    const [shownItems, seteShownItems] = useState(selectedEvent.thingsToBring)

    // console.log(shownItems)

    function handleDelete(id) {
        const updatedItemList= shownItems.filter((itemObj)=> itemObj.id !== id)
        debugger
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
            seteShownItems(data.thingsToBring)
            setSelectedEvent(data)
        })
    }


    function handleClaimItem(newClaimer) {
        console.log(newClaimer)
    }

    return (
        <div>
            <h1> Here are items we need!</h1>
            <ItemContainer handleClaimItem= {handleClaimItem} 
                           shownList= {shownItems}
                           seteShownItems= {seteShownItems}
                           selectedEvent={selectedEvent}
                           setSelectedEvent={setSelectedEvent}
                           handleDelete={handleDelete}/>
            <AddItem 
                // handleFormSubmit={handleFormSubmit} 
                itemList={shownItems} setSelectedEvent={setSelectedEvent} selectedEvent={selectedEvent} seteShownItems={seteShownItems}/>
        </div>
    )
}

export default ItemsToBring