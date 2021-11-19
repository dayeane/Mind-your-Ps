import react from "react"
import ItemCard from "./ItemCard"

function ItemContainer ( {handleDelete, shownList, setShownItems, selectedEvent, setSelectedEvent} ) {
    
    const shownItem = shownList.map((item) => <ItemCard key={item.id} handleDelete= {handleDelete} shownList={shownList} itemObj= {item} setShownItems={setShownItems} selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent}/>)
    
    return (
    <div className="card row mt-5">
        <h2 className= "card-header">Items</h2>

        <table className="table table-striped">
            <thead className="thead-dark" >
                <tr >
                    <th scope="col">
                        Item
                    </th>
                    <th scope="col">
                        Category
                    </th>
                    <th scope="col">
                        Name
                    </th>
                    <th scope="col">
                    </th>
                    <th scope="col">
                    </th>
                </tr>
            </thead>
            <tbody>
                {shownItem}
            </tbody>
        </table>
    </div>
        
    )
}

export default ItemContainer