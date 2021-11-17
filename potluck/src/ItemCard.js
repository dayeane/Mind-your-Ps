import react, {useState} from "react"

function ItemCard ( {item : {item, category, claimer}}, handleClaimItem) {
    
    const [nameOfClaimer, setNameOfClaimer]= useState("")

    function handleChangeClaimer(e) {
        setNameOfClaimer(e.target.value)
    }

    // const updatedClaimer=

    function handleClaimerSubmit(e) {
        e.preventDefault()

    //     fetch(`http://localhost:3001/events/${id}`), {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type" : "application/json"
    //         },
    //         body:JSON.stringify()
    //     }
        handleClaimItem()
    }

    return (
       
        <tr>
            <td>{item}</td>
            <td>{category}</td>
            <td>{claimer}</td>
            <td>
                <form onSubmit={handleClaimerSubmit}>
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