import react, {useState} from "react"

function ItemCard ( {itemObj, shownList, seteShownItems, selectedEvent, handleDelete, setSelectedEvent, handleClaimItem }) {
    
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
        .then((data) => seteShownItems(data.thingsToBring))
    }

    return (
      <div className= "row">
        <tr className="col-12">
            <td className="col-2">{item}</td>
            <td className="col-2">{category}</td>
            <td className="col-2">{claimer}</td>
            <td className= "row">
                <form onSubmit={(e)=> handleClaimerSubmit(e, item)}>
                    <input className="col-2" placeHolder="Claim Item" type="text" name="claimer" onChange={handleChangeClaimer} value={nameOfClaimer}/>
                    <button className="col-2" type="submit">Claim</button>
                </form>
            </td>
            <td className="col-2"><button onClick={()=> handleDelete(itemObj.id)}>Delete here</button></td>
        </tr>
     </div>
    )
}

export default ItemCard