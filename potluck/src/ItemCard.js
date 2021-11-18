import react, {useState} from "react"

function ItemCard ( {itemObj, shownList, setShownItems, selectedEvent, handleDelete, setSelectedEvent, handleClaimItem }) {
    
    const {item, category, claimer} = itemObj

    console.log("shown:", shownList)

    const {id} = selectedEvent
   
    const [nameOfClaimer, setNameOfClaimer]= useState("")

    function handleChangeClaimer(e) {
        setNameOfClaimer(e.target.value)
    }

       function handleClaimerSubmit(e, item) {
        e.preventDefault()

        const newClaimer = shownList.map((thingToBring) => {
            
            console.log("thingToBring:", thingToBring.claimer)
            
            if (thingToBring.item === item) {
                return ({...thingToBring, claimer: nameOfClaimer})
            } else {
                return thingToBring
            }
        })

        console.log(newClaimer)

        fetch(`http://localhost:3001/events/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({thingsToBring: newClaimer})
        })
        .then(res=> res.json())
        .then((data) => setShownItems(data.thingsToBring))
    }

    return (
        <tr>
            <td>{item}</td>
            <td>{category}</td>
            <td>{claimer}</td>
            <td className= "row">
                <form onSubmit={(e)=> handleClaimerSubmit(e, item)}>
                    <input placeholder="Claim Item" type="text" name="claimer" onChange={handleChangeClaimer} value={nameOfClaimer}/>
                    <button type="submit">Claim</button>
                </form>
            </td>
            <td><button onClick={()=> handleDelete(itemObj.id)}>Delete</button></td>
        </tr>
    )
}

export default ItemCard