import react from "react"
import ItemContainer from "./ItemContainer.js"
import AddItem from "./AddItem.js"

function ItemsToBring () {
    return (
        <div>
            <h1> Here are items we need!</h1>
            <ItemContainer />
            <AddItem />
        </div>
    )
}

export default ItemsToBring