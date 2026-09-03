

import BurgerButton from "./BurgerButton.jsx";
import CtaButtonDesktop from "./CtaButtonDesktop.jsx";
import CtaButtonMobile from "./CtaButtonMobile.jsx";
import LogoDesktop from "./LogoDesktop.jsx";
import LogoMobile from "./LogoMobile.jsx";
import MenuHome from "./MenuHome.jsx";


const Header = () => {
    return (
        <header className="header-area header-two navigation-white transparent-header">
            <div className="container">
                <div className="header-navigation">
                    <div className="nav-overlay"></div>
                    <div className="primary-menu"> 
                        <LogoDesktop />
                        <div className="nav-inner-menu">
                            <div className="foodix-nav-menu">
                                <LogoMobile />
                                <MenuHome />
                                <CtaButtonMobile />
                            </div>
                            {/* <!--=== Nav Right Item ===--> */}
                            <div className="nav-right-item">
                                <CtaButtonDesktop />
                                <BurgerButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;
