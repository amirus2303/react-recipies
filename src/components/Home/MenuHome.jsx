import { NavLink } from "react-router-dom";
const MenuHome = () => {
    return (
        <nav className="main-menu">
            <ul>
                <li className="menu-item">
                    <NavLink to="/">Accueil</NavLink>
                </li>

                <li className="menu-item">
                    <NavLink to="/recipies">Recettes</NavLink>
                </li>

                <li className="menu-item">
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
};
export default MenuHome;
