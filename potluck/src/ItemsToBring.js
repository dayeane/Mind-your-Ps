import react, {useState, useEffect} from "react"
import ItemContainer from "./ItemContainer.js"
import AddItem from "./AddItem.js"

function ItemsToBring () {
    
const [itemsList, setItemsList] = useState([])

useState( () => {
    fetch( "http://localhost:3000/events")
    .then(res => res.json())
    .then((data) => setItemsList(data[0].thingsToBring))
}, [])


    
    return (
        <div>
            <h1> Here are items we need!</h1>
            <ItemContainer itemsList= {itemsList}/>
            <AddItem />
        </div>
    )
}

export default ItemsToBring