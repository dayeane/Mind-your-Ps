import react from "react"
import ItemCard from "./ItemCard"

function ItemContainer ( {itemsList} ) {
    
    const shownItem = itemsList.map((item) => <ItemCard key= {item.id} item= {item}  /> 
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