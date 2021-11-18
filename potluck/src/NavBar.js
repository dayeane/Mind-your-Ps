import { Link } from "react-router-dom";

function NavBar() {

    return (
        <nav>
            <Link to="/">Home</Link> | 
            <Link to="/info">Event info</Link> | 
            <Link to="/guests">Guests</Link> | 
            <Link to="/itemsToBring">Items to bring</Link> | 
            <Link to="/photos">Photo Album</Link> | 
        </nav>
    ) 
}

export default NavBar;