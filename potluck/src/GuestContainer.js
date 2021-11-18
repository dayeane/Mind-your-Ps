import Guest from "./Guest";
import GuestSearch from "./GuestSearch";
import GuestCreateForm from "./GuestCreateForm";

function GuestContainer({ eventId, allGuest, setAllGuest, filteredGuest, setFilteredGuest }) {

  if (!filteredGuest){ return <h2>..Please select and event from home page</h2> }
  
  const guestList = filteredGuest.map((guest) => <Guest key={guest.id} guest={guest} />);
  
  return (

    <>
      <h2>Guests</h2>
      <GuestCreateForm allGuest={allGuest} eventId={eventId} setFilteredGuest={setFilteredGuest} setAllGuest={setAllGuest}/>
      <GuestSearch allGuest={allGuest} setFilteredGuest={setFilteredGuest} />
      <table class="table table-striped">
        <thead class="thead-dark"> 
          <tr>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">phone</th>
            <th scope="col">confirm</th>
          </tr>
        </thead> 
        <tbody>
          {guestList}
        </tbody>
      </table>
    </>
  )
};



export default GuestContainer;