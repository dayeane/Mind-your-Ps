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
     
     <div class="card col-12 mt-5 mb-2" >
         <div class="card-header"><h2>Search Guest</h2></div>
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
        </div>
      </>
    )
}


export default GuestSearch;