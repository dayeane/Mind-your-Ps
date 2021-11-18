import react, {useState, useEffect} from "react"
import ItemContainer from "./ItemContainer.js"
import AddItem from "./AddItem.js"

function ItemsToBring ({selectedEvent, setSelectedEvent}) {

const {id}= selectedEvent
  
const itemList=selectedEvent.thingsToBring

console.log(itemList)

const [shownItems, seteShownItems] = useState(itemList)

console.log(shownItems)

function handleDelete(deleteItemObj) {

    
    const updatedItemList= itemList.filter((itemObj)=> itemObj.item !== deleteItemObj)
    
    fetch(`http://localhost:3001/events/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({thingsToBring: updatedItemList})
    })
    .then(res=> res.json())
    .then((data)=> console.log(data))
    
    seteShownItems(updatedItemList)
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
            handleDelete={handleDelete}
            />
            <AddItem 
                // handleFormSubmit={handleFormSubmit} 
                itemList={itemList} setSelectedEvent={setSelectedEvent} selectedEvent={selectedEvent} seteShownItems={seteShownItems}/>
        </div>
    )
}

export default ItemsToBring