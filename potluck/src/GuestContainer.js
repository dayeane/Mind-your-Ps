import Guest from "./Guest";
import GuestSearch from "./GuestSearch";
import GuestCreateForm from "./GuestCreateForm";

function GuestContainer({ eventId, allGuest, setAllGuest, filteredGuest, setFilteredGuest }) {

  if (!filteredGuest){ return <h2>..Please select and event from home page</h2> }
  
  const guestList = filteredGuest.map((guest) => <Guest key={guest.id} guest={guest} />);
  
  return (

    <>
    <div className="card row mt-5">
      <div className="card-header"><h2>Guests</h2></div>
        <GuestCreateForm allGuest={allGuest} eventId={eventId} setFilteredGuest={setFilteredGuest} setAllGuest={setAllGuest}/>
        <GuestSearch allGuest={allGuest} setFilteredGuest={setFilteredGuest} />
        <table className="table table-striped">
          <thead > 
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
      </div>
    </>
  )
};



export default GuestContainer;