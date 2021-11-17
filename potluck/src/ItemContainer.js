import react from "react"
import ItemCard from "./ItemCard"

function ItemContainer ( {shownList, seteShownItems, selectedEvent, setSelectedEvent /*handleClaimItem*/} ) {
    
    if (!shownList) {
        return (<h2>Loading..</h2>)
    }

    const shownItem = shownList.map((item) => <ItemCard key= {item.id} shownList={shownList} itemObj= {item} seteShownItems={seteShownItems} selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent}/*handleClaimItem={handleClaimItem}*//> 
    )
    
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