import react, {useState, useEffect} from "react"
import ItemContainer from "./ItemContainer.js"
import AddItem from "./AddItem.js"

function ItemsToBring () {
    
const [itemsList, setItemsList] = useState([])
const [fullData, setFullData]= useState([])



useState( () => {
    fetch( "http://localhost:3001/events")
    .then(res => res.json())
    .then((data) => {
        setItemsList(data[0].thingsToBring)
        setFullData(data)   
    })
}, [])

function handleFormSubmit(newItem) {
   console.log(newItem)
    setFullData([newItem, ...fullData])
}

function handleClaimItem(newClaimer) {
    console.log(newClaimer)
}

    return (
        <div>
            <h1> Here are items we need!</h1>
            <ItemContainer handleClaimItem= {handleClaimItem} itemsList= {itemsList}/>
            <AddItem handleFormSubmit={handleFormSubmit} fullData={fullData} itemsList={itemsList}/>
        </div>
    )
}

export default ItemsToBring