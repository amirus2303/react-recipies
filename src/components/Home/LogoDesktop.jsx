import { NavLink } from "react-router-dom";
const LogoDesktop = () => {
    return (
        <div className="site-branding">
            <NavLink to="/" className="brand-logo">
                <img src="assets/images/logo/logo-white2.png" alt="Logo" />
            </NavLink>
        </div>
    );
};
export default LogoDesktop;
