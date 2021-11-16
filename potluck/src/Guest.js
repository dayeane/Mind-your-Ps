function Guest({guest}) {
   return(
    <tr>
      <td>{guest.name}</td>
      <td>{guest.email}</td>
      <td>{guest.phone}</td>
      <td>{guest.confirm}</td>
    </tr>
   ) 
}

export default Guest;