import {useRef} from 'react'

function GuestSearch({setFilteredGuest, allGuest}) {

    const name = useRef('')
    const email = useRef('')
    const phone = useRef('')
    const confirm = useRef('All')
   

    function handleSearch(e) {
        e.preventDefault()
        
        const guestSearch = {
            name: name.current.value,
            email: email.current.value,
            phone: phone.current.value,
            confirm: confirm.current.value,
        }
    
        let filteredList = allGuest.filter(guest => {
            if(guestSearch.name === "") { return true }
            return guest.name.toLowerCase().includes(guestSearch.name.toLowerCase())
        })
        filteredList = filteredList.filter(guest => {
            if(guestSearch.email === "") { return true }
            return guest.email.toLowerCase().includes(guestSearch.email.toLowerCase())
        })
        filteredList = filteredList.filter(guest => {
            if(guestSearch.phone === "") { return true }
            return guest.phone.includes(guestSearch.phone)
        })
        filteredList = filteredList.filter(guest => {
            if(guestSearch.confirm === "All") { return true }
            return guest.confirm.toLowerCase().includes(guestSearch.confirm.toLowerCase())
        })

        setFilteredGuest(filteredList)
    }

    return(
     <>
     <h2>Guest Search</h2>
        <form>
            <label>Name:</label>
            <input onChange={handleSearch} ref={name} type="text" id="name" name="name" />

            <label>Email:</label>
            <input  onChange={handleSearch} ref={email} type="text" id="email" name="email" />

            <label>Phone:</label>
            <input onChange={handleSearch} ref={phone} type="text" id="phone" name="phone" />

            <label>Its Confirmed?:</label>

            <select onChange={handleSearch} ref={confirm}  name="confirm" id="confirm">
                <option value="All">All</option>
                <option value="true">true</option>
                <option value="false">false</option>
            </select>

        </form>
      </>
    )
}


export default GuestSearch;