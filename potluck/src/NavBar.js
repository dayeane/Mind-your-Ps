import { Link } from "react-router-dom";

function NavBar() {

    return (
    <nav className="navbar navbar-light app-header app-link" id="sidebar">
            <a className="navbar-brand" href="#">POTLUCK</a>
            <Link to="/">Home</Link>
            <Link to="/info">Event Info</Link>
            <Link to="/guests">Guests</Link>
            <Link to="/itemsToBring">Items to Bring</Link>
            <Link to="/photos">Photo Album</Link>
        </nav>
    ) 
}

export default NavBar;