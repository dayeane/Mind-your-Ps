import react from "react"
import ItemCard from "./ItemCard"

function ItemContainer () {
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
                <ItemCard />
            </tbody>
        </table>
    </>
        
    )
}

export default ItemContainer