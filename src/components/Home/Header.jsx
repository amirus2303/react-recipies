const Header = () => {
    return (
        <header className="header-area header-two navigation-white transparent-header">
            <div className="container">
                <div className="header-navigation">
                    <div className="nav-overlay"></div>
                    <div className="primary-menu">
                        {/* <!--=== Site Branding ===--> */}
                        <div className="site-branding">
                            <a href="index.html" className="brand-logo">
                                <img
                                    src="assets/images/logo/logo-white2.png"
                                    alt="Logo"
                                />
                            </a>
                        </div>
                        <div className="nav-inner-menu">
                            {/* <!--=== Foodix Nav Menu ===--> */}
                            <div className="foodix-nav-menu">
                                {/* <!--=== Mobile Logo ===--> */}
                                <div className="mobile-logo mb-30 d-block d-xl-none text-center">
                                    <a href="index.html" className="brand-logo">
                                        <img
                                            src="assets/images/logo/logo-main.png"
                                            alt="Site Logo"
                                        />
                                    </a>
                                </div>
                                {/* <!--=== Main Menu ===--> */}
                                <nav className="main-menu">
                                    <ul>
                                        <li className="menu-item has-children">
                                            <a href="#">Home</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="index.html">
                                                        Home Restaurant
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index-beef.html">
                                                        Home Beef
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index-burger.html">
                                                        Home Burger
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index-pizza.html">
                                                        Home Pizza
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index-sushi.html">
                                                        Home Sushi
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item has-children">
                                            <a href="#">Menu</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="menu-v1.html">
                                                        Menu List One
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="menu-v2.html">
                                                        Menu List Two
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="menu-v3.html">
                                                        Menu Grid
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="menu-details.html">
                                                        Menu Details
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item has-children">
                                            <a href="#">Pages</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="about.html">
                                                        About Us
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="history.html">
                                                        Our history
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="chefs.html">
                                                        Our Chefs
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="gallery.html">
                                                        Our Gallery
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="faq.html">Faqs</a>
                                                </li>
                                                <li>
                                                    <a href="404.html">
                                                        Error 404
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item has-children">
                                            <a href="#">Shop</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="products.html">
                                                        Our Shop
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="menu-details.html">
                                                        Product Details
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="cart.html">Cart</a>
                                                </li>
                                                <li>
                                                    <a href="checkout.html">
                                                        Checkout
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item has-children">
                                            <a href="#">Blog</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="blog-grid.html">
                                                        Blog Grid
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-classic.html">
                                                        Blog Standard
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-details.html">
                                                        Blog Details
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item">
                                            <a href="contact.html">Contact</a>
                                        </li>
                                    </ul>
                                </nav>
                                {/* <!--=== Nav Button ===--> */}
                                <div className="nav-button mt-50 d-block d-xl-none  text-center">
                                    <a
                                        href="contact.html"
                                        className="theme-btn style-one"
                                    >
                                        Book A Table
                                    </a>
                                </div>
                            </div>
                            {/* <!--=== Nav Right Item ===--> */}
                            <div className="nav-right-item">
                                <div className="nav-button d-none d-xl-block">
                                    <a
                                        href="contact.html"
                                        className="theme-btn style-one"
                                    >
                                        Book A Table
                                    </a>
                                </div>
                                <div className="cart-button">
                                    <i className="far fa-shopping-cart"></i>
                                </div>
                                <div className="navbar-toggler">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;
