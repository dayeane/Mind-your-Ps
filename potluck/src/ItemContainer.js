import react from "react"
import ItemCard from "./ItemCard"

function ItemContainer ( {handleDelete, shownList, setShownItems, selectedEvent, setSelectedEvent} ) {
    
    const shownItem = shownList.map((item) => <ItemCard key={item.id} handleDelete= {handleDelete} shownList={shownList} itemObj= {item} setShownItems={setShownItems} selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent}/>)
    
    return (
    <>
        <h2>Here is the list of items</h2>

        <table>
            <tbody>
                <tr>
                    <th>
                        <h3>Item</h3>
                    </th>
                    <th>
                        <h3>Category</h3>
                    </th>
                    <th>
                        <h3>Owner</h3>
                    </th>
                </tr>
                {shownItem}
            </tbody>
        </table>
    </>
        
    )
}

export default ItemContainer