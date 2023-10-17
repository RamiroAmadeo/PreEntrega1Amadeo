import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="nav-box">
            <Link to="/">
                <h1>GreenFlag</h1>
            </Link>
            <ul className="nav-links">
                <li><NavLink to= "/productos/hamburguesas">Hamburguesas</NavLink></li>
                <li><NavLink to="/productos/adicionales">Adicionales</NavLink></li>
                <CartWidget/>
            </ul>
        </nav>
    );
};

export default Navbar;