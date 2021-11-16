import {useEffect, useState} from "react";
import Guest from "./Guest";
import GuestSearch from "./GuestSearch";

function GuestContainer({ guests }) {
  const [allGuest, setAllGuest] = useState([]);
  const [filteredGuest, setFilteredGuest] = useState([]);

  useEffect(() => {
      setAllGuest(guests);
      setFilteredGuest(guests)
  }, [guests]);
  
  const guestList = filteredGuest.map((guest) => <Guest key={guest.id} guest={guest} />);
  
  return (

    <>
      <h2>Guests List</h2>
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