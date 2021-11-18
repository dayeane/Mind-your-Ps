import react from "react"
import ItemCard from "./ItemCard"

function ItemContainer ( {handleDelete, shownList, seteShownItems, selectedEvent, setSelectedEvent /*handleClaimItem*/} ) {
    
    if (!shownList) {
        return (<h2>Loading..</h2>)
    }

    const shownItem = shownList.map((item) => <ItemCard key={item.id} handleDelete= {handleDelete} shownList={shownList} itemObj= {item} seteShownItems={seteShownItems} selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent}/*handleClaimItem={handleClaimItem}*//> 
    )
    
    return (
    <div className="card row">
        <h2 className= "card-header">Items</h2>

        <table className="table table-striped">
            <tbody className="thead-dark" >
                <tr >
                    <th scope="col">
                        <h3>Item</h3>
                    </th>
                    <th scope="col">
                        <h3>Category</h3>
                    </th>
                    <th scope="col">
                        <h3>Owner</h3>
                    </th>
                </tr>
                {shownItem}
            </tbody>
        </table>
    </div>
        
    )
}

export default ItemContainer