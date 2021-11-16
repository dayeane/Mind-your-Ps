import react from "react"

function ItemCard ( {item : {item, category, claimer}}) {
    return (
       
        <tr>
            <td>{item}</td>
            <td>{category}</td>
            <td>{claimer}</td>
            <td><button>Claim Item</button></td>
            <td><button>Delete here</button></td>
        </tr>
       
    )
}

export default ItemCard