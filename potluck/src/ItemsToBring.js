import react, {useState, useEffect} from "react"
import ItemContainer from "./ItemContainer.js"
import AddItem from "./AddItem.js"

function ItemsToBring ({selectedEvent, setSelectedEvent}) {
    

    
const itemList=selectedEvent.thingsToBring

const [shownItems, seteShownItems] = useState(itemList)


// function handleFormSubmit(newItem) {
//    console.log(newItem)
//    setSelectedEvent([newItem, ...fullData])
// }

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
            />
            <AddItem 
                // handleFormSubmit={handleFormSubmit} 
                itemList={itemList} setSelectedEvent={setSelectedEvent} selectedEvent={selectedEvent} seteShownItems={seteShownItems}/>
        </div>
    )
}

export default ItemsToBring