import {useEffect, useState} from "react";
import Guest from "./Guest";
import GuestSearch from "./GuestSearch";
import GuestCreateForm from "./GuestCreateForm";

function GuestContainer({ eventId, allGuest, setAllGuest, filteredGuest, setFilteredGuest }) {

  if (!filteredGuest){ return <h2>..loading</h2> }
  
  const guestList = filteredGuest.map((guest) => <Guest key={guest.id} guest={guest} />);
  
  return (

    <>
      <h2>Guests</h2>
      <GuestCreateForm allGuest={allGuest} eventId={eventId} setFilteredGuest={setFilteredGuest} setAllGuest={setAllGuest}/>
      <GuestSearch allGuest={allGuest} setFilteredGuest={setFilteredGuest} />
      <table>
        <thead> 
          <tr>
            <th>name</th>
            <th>email</th>
            <th>phone</th>
            <th>confirm</th>
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