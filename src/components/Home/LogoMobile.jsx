import {NavLink} from "react-router-dom";
const LogoMobile = () => {
    return (
        <div className="mobile-logo mb-30 d-block d-xl-none text-center">
            <NavLink to="/" className="brand-logo">
                <img src="assets/images/logo/logo-main.png" alt="Site Logo" />
            </NavLink>
        </div>
    );
};
export default LogoMobile;
