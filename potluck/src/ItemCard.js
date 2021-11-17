import react, {useState} from "react"

function ItemCard ( {item : {item, category, claimer}}) {
    
    const [nameOfClaimer, setNameOfClaimer]= useState("")

    function handleChangeClaimer(e) {
        setNameOfClaimer(e.target.value)
    }

    return (
       
        <tr>
            <td>{item}</td>
            <td>{category}</td>
            <td>{claimer}</td>
            <td>
                <form>
                    <label>Claim Item</label>
                    <input type="text" name="claimer" onChange={handleChangeClaimer} value={nameOfClaimer}/>
                    <button type="submit">Claim</button>
                </form>
            </td>
            <td><button>Delete here</button></td>
        </tr>
       
    )
}

export default ItemCard