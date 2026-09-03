import { useEffect } from "react";

const App = () => {
    useEffect(() => {
        if (typeof window !== "undefined" && typeof window.initFoodixSliders === "function") {
            window.initFoodixSliders();
        }
    }, []);
    return (
        <>
            {/* <!--====== Start Loader Area ======--> */}
            <div className="fd-preloader">
                <div className="loader"></div>
            </div>
            {/* <!--====== End Loader Area ======--> */}
            {/* <!--====== Start Overlay ======--> */}
            <div className="offcanvas__overlay"></div>
            {/* <!--====== End Overlay ======--> */}
            {/* <!--====== Start Sidemenu-wrapper-cart Area ======--> */}
            <div className="sidemenu-wrapper-cart">
                <div className="sidemenu-content">
                    <div className="widget widget-shopping-cart">
                        <h4>My cart</h4>
                        <div className="sidemenu-cart-close">
                            <i className="far fa-times"></i>
                        </div>
                        <div className="widget-shopping-cart-content">
                            <ul className="foodix-mini-cart-list">
                                <li className="foodix-menu-cart">
                                    <a href="#" className="remove-cart">
                                        <i className="far fa-trash-alt"></i>
                                    </a>
                                    <a href="#">
                                        <img
                                            src="assets/images/product/cart-1.jpg"
                                            alt="cart image"
                                        />
                                        Urban Bourbon Bliss Ribeye
                                    </a>
                                    <span className="quantity">
                                        1 ×{" "}
                                        <span>
                                            <span className="currency">$</span>
                                            940.00
                                        </span>
                                    </span>
                                </li>
                                <li className="foodix-menu-cart">
                                    <a href="#" className="remove-cart">
                                        <i className="far fa-trash-alt"></i>
                                    </a>
                                    <a href="#">
                                        <img
                                            src="assets/images/product/cart-2.jpg"
                                            alt="cart image"
                                        />
                                        Artisanal Truffle Tango Sirloin
                                    </a>
                                    <span className="quantity">
                                        1 ×{" "}
                                        <span>
                                            <span className="currency">$</span>
                                            940.00
                                        </span>
                                    </span>
                                </li>
                                <li className="foodix-menu-cart">
                                    <a href="#" className="remove-cart">
                                        <i className="far fa-trash-alt"></i>
                                    </a>
                                    <a href="#">
                                        <img
                                            src="assets/images/product/cart-3.jpg"
                                            alt="cart image"
                                        />
                                        Smoked Paprika Perfection
                                    </a>
                                    <span className="quantity">
                                        1 ×{" "}
                                        <span>
                                            <span className="currency">$</span>
                                            940.00
                                        </span>
                                    </span>
                                </li>
                                <li className="foodix-menu-cart">
                                    <a href="#" className="remove-cart">
                                        <i className="far fa-trash-alt"></i>
                                    </a>
                                    <a href="#">
                                        <img
                                            src="assets/images/product/cart-4.jpg"
                                            alt="cart image"
                                        />
                                        Tandoori Temptation Tender
                                    </a>
                                    <span className="quantity">
                                        1 ×{" "}
                                        <span>
                                            <span className="currency">$</span>
                                            940.00
                                        </span>
                                    </span>
                                </li>
                            </ul>
                            <div className="cart-mini-total">
                                <div className="cart-total">
                                    <span>
                                        <strong>Subtotal:</strong>
                                    </span>{" "}
                                    <span className="amount">
                                        1 ×{" "}
                                        <span>
                                            <span className="currency">$</span>
                                            940.00
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="cart-button">
                                <a
                                    href="checkout.html"
                                    className="theme-btn style-one"
                                >
                                    Proceed to checkout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--====== End Sidemenu-wrapper-cart Area ======--> */}
            {/* <!--====== Start Header Area ======--> */}
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
                                        <a
                                            href="index.html"
                                            className="brand-logo"
                                        >
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
                                                        <a href="faq.html">
                                                            Faqs
                                                        </a>
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
                                                        <a href="cart.html">
                                                            Cart
                                                        </a>
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
                                                <a href="contact.html">
                                                    Contact
                                                </a>
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
            {/* <!--====== End Header Area ======--> */}
            {/* <!--====== Start Hero Section ======--> */}
            <section className="hero-section">
                {/* <!--=== Hero Wrapper ===--> */}
                <div
                    className="hero-wrapper-three bg_cover"
                    style={{ backgroundImage: "url(assets/images/hero/hero-three_bg.jpg)" }}
                >
                    <div className="shape shape-one scene">
                        <span data-depth=".5">
                            <img
                                src="assets/images/hero/shape-6.png"
                                alt="shape image"
                            />
                        </span>
                    </div>
                    <div className="shape shape-two scene">
                        <span data-depth=".7">
                            <img
                                src="assets/images/hero/shape-7.png"
                                alt="shape image"
                            />
                        </span>
                    </div>
                    <div className="shape shape-three ">
                        <span>
                            <img
                                src="assets/images/hero/shape-8.png"
                                alt="shape image"
                            />
                        </span>
                    </div>
                    {/* <!--=== Hero Image ===--> */}
                    <div
                        className="hero-image wow fadeInRight"
                        data-wow-delay=".5s"
                    >
                        <img
                            src="assets/images/hero/hero-three_img1.png"
                            alt="Hero image"
                        />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                {/* <!--=== Hero Content ===--> */}
                                <div className="hero-content">
                                    <h1
                                        className="wow fadeInDown"
                                        data-wow-delay=".5s"
                                    >
                                        Cheese Delight Pizza
                                    </h1>
                                    <p
                                        className="wow fadeInDown"
                                        data-wow-delay=".6s"
                                    >
                                        Savor the perfection of our Italian
                                        Cheese Pizza—crispy golden crust,
                                        premium mozzarella, Parmesan, and
                                        ricotta...
                                    </p>
                                    <div
                                        className="hero-button wow fadeInDown"
                                        data-wow-delay=".7s"
                                    >
                                        <a
                                            href="index-2.html"
                                            className="theme-btn style-one"
                                        >
                                            Order Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--====== End Hero Section ======--> */}
            {/* <!--====== Start Animated-headline Section ======--> */}
            <section className="animated-headline-area primary-dark-bg pt-20 pb-20">
                <div className="animated-list-wrap">
                    <div className="animated-wrap">
                        <div className="animated-inner left">
                            <span className="animated-list-item">
                                <b>
                                    Exquisite Four-Cheese Delight Pizza{" "}
                                    <i className="far fa-asterisk"></i>
                                </b>
                            </span>
                            <span className="animated-list-item">
                                <b>
                                    Exquisite Four-Cheese Delight Pizza{" "}
                                    <i className="far fa-asterisk"></i>
                                </b>
                            </span>
                            <span className="animated-list-item">
                                <b>
                                    Exquisite Four-Cheese Delight Pizza{" "}
                                    <i className="far fa-asterisk"></i>
                                </b>
                            </span>
                        </div>
                        <div className="animated-inner left">
                            <span className="animated-list-item">
                                <b>
                                    Exquisite Four-Cheese Delight Pizza{" "}
                                    <i className="far fa-asterisk"></i>
                                </b>
                            </span>
                            <span className="animated-list-item">
                                <b>
                                    Exquisite Four-Cheese Delight Pizza{" "}
                                    <i className="far fa-asterisk"></i>
                                </b>
                            </span>
                            <span className="animated-list-item">
                                <b>
                                    Exquisite Four-Cheese Delight Pizza{" "}
                                    <i className="far fa-asterisk"></i>
                                </b>
                            </span>
                        </div>
                        <div className="animated-inner left">
                            <span className="animated-list-item">
                                <b>
                                    Exquisite Four-Cheese Delight Pizza{" "}
                                    <i className="far fa-asterisk"></i>
                                </b>
                            </span>
                            <span className="animated-list-item">
                                <b>
                                    Exquisite Four-Cheese Delight Pizza{" "}
                                    <i className="far fa-asterisk"></i>
                                </b>
                            </span>
                            <span className="animated-list-item">
                                <b>
                                    Exquisite Four-Cheese Delight Pizza{" "}
                                    <i className="far fa-asterisk"></i>
                                </b>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--====== End Animated-headline Section ======--> */}
            {/* <!--====== Start Banner Section ======--> */}
            <section className="banner-section pt-130">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <!--=== Foodix Banner ===--> */}
                            <div className="foodix-banner-item style-three mb-30 wow fadeInDown">
                                <div
                                    className="banner-inner-wrap bg_cover"
                                    style= {{ backgroundImage: "url(assets/images/bg/banner-bg-2.jpg)" }}
                                >
                                    <div className="banner-img">
                                        <img
                                            src="assets/images/bg/bn-img-5.png"
                                            alt="banner image"
                                        />
                                    </div>
                                    <div className="banner-content">
                                        <span className="sub-title">
                                            Premium Berger
                                        </span>
                                        <h3>Italian burger</h3>
                                        <p>
                                            Experience Italy on a bun with our
                                            Italian burger—juicy, seasoned beef
                                            patty, melted mozzarella.
                                        </p>
                                        <a
                                            href="index-3.html"
                                            className="theme-btn style-one"
                                        >
                                            Make a Booking
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            {/* <!--=== Foodix Banner ===--> */}
                            <div className="foodix-banner-item style-three mb-30 wow fadeInUp">
                                <div
                                    className="banner-inner-wrap bg_cover"
                                    style= {{ backgroundImage: "url(assets/images/bg/banner-bg-3.jpg)" }}
                                >
                                    <div className="banner-img">
                                        <img
                                            src="assets/images/bg/bn-img-1.png"
                                            alt="banner image"
                                        />
                                    </div>
                                    <div className="banner-content">
                                        <span>Premium skewers</span>
                                        <h3>chicken skewers</h3>
                                        <p>
                                            Savor the tantalizing taste of our
                                            expertly grilled chicken skewers,
                                            marinated.
                                        </p>
                                        <a
                                            href="index-3.html"
                                            className="theme-btn style-one"
                                        >
                                            Make a Booking
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            {/* <!--=== Foodix Banner ===--> */}
                            <div className="foodix-banner-item style-three mb-30 wow fadeInUp">
                                <div
                                    className="banner-inner-wrap bg_cover"
                                    style={{ backgroundImage: "url(assets/images/bg/banner-bg-4.jpg)" }}
                                >
                                    <div className="banner-img">
                                        <img
                                            src="assets/images/bg/bn-img-2.png"
                                            alt="banner image"
                                        />
                                    </div>
                                    <div className="banner-content">
                                        <span>Premium Wrap</span>
                                        <h3>chicken Wrap</h3>
                                        <p>
                                            Indulge in our savory chicken wrap,
                                            a delightful blend of tender grilled
                                            chicken.
                                        </p>
                                        <a
                                            href="index-3.html"
                                            className="theme-btn style-one"
                                        >
                                            Make a Booking
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--====== End Banner Section ======--> */}
            {/* <!--====== Start Menu Section ======--> */}
            <section className="menu-section pt-90 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb-55 wow fadeInDown">
                                <span className="sub-title">
                                    Choose your flavor
                                </span>
                                <h2>Our Special pizza</h2>
                                <p>
                                    Indulge in the extraordinary with Our
                                    Special Pizza. A tantalizing blend of
                                    succulent toppings, premium cheeses, and a
                                    secret sauce, crafted to perfection.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <!--=== Foodix Tabs ===--> */}
                            <div className="foodix-tabs style-two mb-80">
                                <ul className="nav nav-tabs wow fadeInUp">
                                    <li>
                                        <button
                                            className="nav-link active"
                                            data-bs-toggle="tab"
                                            data-bs-target="#cat1"
                                        >
                                            Cheese
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            data-bs-target="#cat2"
                                        >
                                            Mushroom
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            data-bs-target="#cat3"
                                        >
                                            Sausage
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            data-bs-target="#cat4"
                                        >
                                            Pepperoni
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <!--=== Foodix Tabs ===--> */}
                            <div className="tab-content wow fadeInDown">
                                <div
                                    className="tab-pane fade show active"
                                    id="cat1"
                                >
                                    <div className="row justify-content-center">
                                        <div className="col-xl-4 col-md-6 col-sm-12">
                                            {/* <!--=== Menu Item ===--> */}
                                            <div className="menu-item style-seven text-center mb-35">
                                                <div className="menu-thumbnail">
                                                    <img
                                                        src="assets/images/menu/menu-19.png"
                                                        alt="menu item"
                                                    />
                                                    <div className="hover-img">
                                                        <img
                                                            src="assets/images/menu/hover-af.png"
                                                            alt="Hover image"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="menu-info">
                                                    <h3 className="title">
                                                        <a href="menu-details.html">
                                                            Cheese Pizza
                                                        </a>
                                                    </h3>
                                                    <p>
                                                        Melting mozzarella atop
                                                        a crisp crust a timeless
                                                        cheese pizza
                                                    </p>
                                                    <p className="price">
                                                        <span className="currency">
                                                            $
                                                        </span>
                                                        121
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-6 col-sm-12">
                                            {/* <!--=== Menu Item ===--> */}
                                            <div className="menu-item style-seven text-center mb-35">
                                                <div className="menu-thumbnail">
                                                    <img
                                                        src="assets/images/menu/menu-20.png"
                                                        alt="menu item"
                                                    />
                                                    <div className="hover-img">
                                                        <img
                                                            src="assets/images/menu/hover-af.png"
                                                            alt="Hover image"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="menu-info">
                                                    <h3 className="title">
                                                        <a href="menu-details.html">
                                                            Pesto Paradise
                                                        </a>
                                                    </h3>
                                                    <p>
                                                        Melting mozzarella atop
                                                        a crisp crust a timeless
                                                        cheese pizza
                                                    </p>
                                                    <p className="price">
                                                        <span className="currency">
                                                            $
                                                        </span>
                                                        159
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-6 col-sm-12">
                                            {/* <!--=== Menu Item ===--> */}
                                            <div className="menu-item style-seven text-center mb-35">
                                                <div className="menu-thumbnail">
                                                    <img
                                                        src="assets/images/menu/menu-21.png"
                                                        alt="menu item"
                                                    />
                                                    <div className="hover-img">
                                                        <img
                                                            src="assets/images/menu/hover-af.png"
                                                            alt="Hover image"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="menu-info">
                                                    <h3 className="title">
                                                        <a href="menu-details.html">
                                                            Cali Fiesta Pie
                                                        </a>
                                                    </h3>
                                                    <p>
                                                        Melting mozzarella atop
                                                        a crisp crust a timeless
                                                        cheese pizza
                                                    </p>
                                                    <p className="price">
                                                        <span className="currency">
                                                            $
                                                        </span>
                                                        210
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="cat2">
                                    <div className="row justify-content-center">
                                        <div className="col-xl-4 col-md-6 col-sm-12">
                                            {/* <!--=== Menu Item ===--> */}
                                            <div className="menu-item style-seven text-center mb-35">
                                                <div className="menu-thumbnail">
                                                    <img
                                                        src="assets/images/menu/menu-3_1.jpg"
                                                        alt="menu item"
                                                    />
                                                    <div className="hover-img">
                                                        <img
                                                            src="assets/images/menu/hover-af.png"
                                                            alt="Hover image"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="menu-info">
                                                    <h3 className="title">
                                                        <a href="menu-details.html">
                                                            Cheese Pizza
                                                        </a>
                                                    </h3>
                                                    <p>
                                                        Melting mozzarella atop
                                                        a crisp crust a timeless
                                                        cheese pizza
                                                    </p>
                                                    <p className="price">
                                                        <span className="currency">
                                                            $
                                                        </span>
                                                        121
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-6 col-sm-12">
                                            {/* <!--=== Menu Item ===--> */}
                                            <div className="menu-item style-seven text-center mb-35">
                                                <div className="menu-thumbnail">
                                                    <img
                                                        src="assets/images/menu/menu-3_2.jpg"
                                                        alt="menu item"
                                                    />
                                                    <div className="hover-img">
                                                        <img
                                                            src="assets/images/menu/hover-af.png"
                                                            alt="Hover image"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="menu-info">
                                                    <h3 className="title">
                                                        <a href="menu-details.html">
                                                            Pesto Paradise
                                                        </a>
                                                    </h3>
                                                    <p>
                                                        Melting mozzarella atop
                                                        a crisp crust a timeless
                                                        cheese pizza
                                                    </p>
                                                    <p className="price">
                                                        <span className="currency">
                                                            $
                                                        </span>
                                                        159
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-6 col-sm-12">
                                            {/* <!--=== Menu Item ===--> */}
                                            <div className="menu-item style-seven text-center mb-35">
                                                <div className="menu-thumbnail">
                                                    <img
                                                        src="assets/images/menu/menu-3_3.jpg"
                                                        alt="menu item"
                                                    />
                                                    <div className="hover-img">
                                                        <img
                                                            src="assets/images/menu/hover-af.png"
                                                            alt="Hover image"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="menu-info">
                                                    <h3 className="title">
                                                        <a href="menu-details.html">
                                                            Cali Fiesta Pie
                                                        </a>
                                                    </h3>
                                                    <p>
                                                        Melting mozzarella atop
                                                        a crisp crust a timeless
                                                        cheese pizza
                                                    </p>
                                                    <p className="price">
                                                        <span className="currency">
                                                            $
                                                        </span>
                                                        210
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="cat3">
                                    <div className="row justify-content-center">
                                        <div className="col-xl-4 col-md-6 col-sm-12">
                                            {/* <!--=== Menu Item ===--> */}
                                            <div className="menu-item style-seven text-center mb-35">
                                                <div className="menu-thumbnail">
                                                    <img
                                                        src="assets/images/menu/menu-3_4.jpg"
                                                        alt="menu item"
                                                    />
                                                    <div className="hover-img">
                                                        <img
                                                            src="assets/images/menu/hover-af.png"
                                                            alt="Hover image"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="menu-info">
                                                    <h3 className="title">
                                                        <a href="menu-details.html">
                                                            Cheese Pizza
                                                        </a>
                                                    </h3>
                                                    <p>
                                                        Melting mozzarella atop
                                                        a crisp crust a timeless
                                                        cheese pizza
                                                    </p>
                                                    <p className="price">
                                                        <span className="currency">
                                                            $
                                                        </span>
                                                        121
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-6 col-sm-12">
                                            {/* <!--=== Menu Item ===--> */}
                                            <div className="menu-item style-seven text-center mb-35">
                                                <div className="menu-thumbnail">
                                                    <img
                                                        src="assets/images/menu/menu-3_5.jpg"
                                                        alt="menu item"
                                                    />
                                                    <div className="hover-img">
                                                        <img
                                                            src="assets/images/menu/hover-af.png"
                                                            alt="Hover image"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="menu-info">
                                                    <h3 className="title">
                                                        <a href="menu-details.html">
                                                            Pesto Paradise
                                                        </a>
                                                    </h3>
                                                    <p>
                                                        Melting mozzarella atop
                                                        a crisp crust a timeless
                                                        cheese pizza
                                                    </p>
                                                    <p className="price">
                                                        <span className="currency">
                                                            $
                                                        </span>
                                                        210
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-6 col-sm-12">
                                            {/* <!--=== Menu Item ===--> */}
                                            <div className="menu-item style-seven text-center mb-35">
                                                <div className="menu-thumbnail">
                                                    <img
                                                        src="assets/images/menu/menu-3_6.jpg"
                                                        alt="menu item"
                                                    />
                                                    <div className="hover-img">
                                                        <img
                                                            src="assets/images/menu/hover-af.png"
                                                            alt="Hover image"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="menu-info">
                                                    <h3 className="title">
                                                        <a href="menu-details.html">
                                                            Cali Fiesta Pie
                                                        </a>
                                                    </h3>
                                                    <p>
                                                        Melting mozzarella atop
                                                        a crisp crust a timeless
                                                        cheese pizza
                                                    </p>
                                                    <p className="price">
                                                        <span className="currency">
                                                            $
                                                        </span>
                                                        159
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="cat4">
                                    <div className="row justify-content-center">
                                        <div className="col-xl-4 col-md-6 col-sm-12">
                                            {/* <!--=== Menu Item ===--> */}
                                            <div className="menu-item style-seven text-center mb-35">
                                                <div className="menu-thumbnail">
                                                    <img
                                                        src="assets/images/menu/menu-3_7.jpg"
                                                        alt="menu item"
                                                    />
                                                    <div className="hover-img">
                                                        <img
                                                            src="assets/images/menu/hover-af.png"
                                                            alt="Hover image"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="menu-info">
                                                    <h3 className="title">
                                                        <a href="menu-details.html">
                                                            Cheese Pizza
                                                        </a>
                                                    </h3>
                                                    <p>
                                                        Melting mozzarella atop
                                                        a crisp crust a timeless
                                                        cheese pizza
                                                    </p>
                                                    <p className="price">
                                                        <span className="currency">
                                                            $
                                                        </span>
                                                        121
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-6 col-sm-12">
                                            {/* <!--=== Menu Item ===--> */}
                                            <div className="menu-item style-seven text-center mb-35">
                                                <div className="menu-thumbnail">
                                                    <img
                                                        src="assets/images/menu/menu-3_8.jpg"
                                                        alt="menu item"
                                                    />
                                                    <div className="hover-img">
                                                        <img
                                                            src="assets/images/menu/hover-af.png"
                                                            alt="Hover image"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="menu-info">
                                                    <h3 className="title">
                                                        <a href="menu-details.html">
                                                            Pesto Paradise
                                                        </a>
                                                    </h3>
                                                    <p>
                                                        Melting mozzarella atop
                                                        a crisp crust a timeless
                                                        cheese pizza
                                                    </p>
                                                    <p className="price">
                                                        <span className="currency">
                                                            $
                                                        </span>
                                                        154
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-6 col-sm-12">
                                            {/* <!--=== Menu Item ===--> */}
                                            <div className="menu-item style-seven text-center mb-35">
                                                <div className="menu-thumbnail">
                                                    <img
                                                        src="assets/images/menu/menu-3_9.jpg"
                                                        alt="menu item"
                                                    />
                                                    <div className="hover-img">
                                                        <img
                                                            src="assets/images/menu/hover-af.png"
                                                            alt="Hover image"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="menu-info">
                                                    <h3 className="title">
                                                        <a href="menu-details.html">
                                                            Cali Fiesta Pie
                                                        </a>
                                                    </h3>
                                                    <p>
                                                        Melting mozzarella atop
                                                        a crisp crust a timeless
                                                        cheese pizza
                                                    </p>
                                                    <p className="price">
                                                        <span className="currency">
                                                            $
                                                        </span>
                                                        98
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--====== End Menu Section ======--> */}
            {/* <!--====== Start Happy Hour Section ======--> */}
            <section className="happy-hour-section">
                {/* <!--=== Booking Wrapper ===--> */}
                <div
                    className="happy-wrapper p-r z-1 bg_cover pt-120 pb-120"
                    style={{ backgroundImage: "url(assets/images/bg/order-bg3.jpg)" }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                {/* <!--=== Section Content Box ===--> */}
                                <div className="section-content-box text-white wow fadeInDown">
                                    <div className="section-title mb-20">
                                        <span className="sub-title">
                                            50% OFF ALL PREMIUM PIZZAS
                                        </span>
                                        <h2>HAPPY SUNDAY</h2>
                                    </div>
                                    <p>
                                        Happy Sunday Premium Pizza is a
                                        delightful blend of grilled chicken
                                        Italian sausage, bell peppers, onions,
                                        and gooey mozzarella.
                                    </p>
                                    <div className="happy-button">
                                        <p>Order Online</p>
                                        <a
                                            href="tel:+555-657-8876"
                                            className="theme-btn style-one"
                                        >
                                            <i className="far fa-phone-alt"></i>
                                            +555-657-8876
                                        </a>
                                        <a
                                            href="index-3.html"
                                            className="theme-btn style-one"
                                        >
                                            <i className="far fa-hand-point-up"></i>
                                            Make A Booking
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--====== End Happy Hour Section ======--> */}
            {/* <!--====== Start Choose Food Section ======--> */}
            <section className="choose-your-food-section pt-120 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb-55 wow fadeInDown">
                                <span className="sub-title">
                                    Choose your flavor
                                </span>
                                <h2>the best food in town</h2>
                                <p>
                                    Indulge in the extraordinary with Our
                                    Special Pizza. A tantalizing blend of
                                    succulent toppings, premium cheeses, and a
                                    secret sauce, crafted to perfection.{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="menu-item style-six mb-30 text-center wow fadeInUp">
                                <div className="menu-thumbnail">
                                    <img
                                        src="assets/images/menu/menu-12.png"
                                        alt="Menu image"
                                    />
                                </div>
                                <div className="menu-info">
                                    <h3 className="title">
                                        <a href="menu-details.html">
                                            Cheese Pizza
                                        </a>
                                    </h3>
                                    <p>
                                        Melting mozzarella atop a crisp crust a
                                        timeless cheese pizza
                                    </p>
                                    <p className="price">
                                        <span className="currency">$</span>210
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="menu-item style-six mb-30 text-center wow fadeInUp">
                                <div className="menu-thumbnail">
                                    <img
                                        src="assets/images/menu/menu-13.png"
                                        alt="Menu image"
                                    />
                                </div>
                                <div className="menu-info">
                                    <h3 className="title">
                                        <a href="menu-details.html">
                                            chicken pizza
                                        </a>
                                    </h3>
                                    <p>
                                        Basil bliss, sun-kissed tomatoes, and
                                        mozzarella dance on artisan crust
                                    </p>
                                    <p className="price">
                                        <span className="currency">$</span>110
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="menu-item style-six mb-30 text-center wow fadeInUp">
                                <div className="menu-thumbnail">
                                    <img
                                        src="assets/images/menu/menu-14.png"
                                        alt="Menu image"
                                    />
                                </div>
                                <div className="menu-info">
                                    <h3 className="title">
                                        <a href="menu-details.html">
                                            Garden veggie
                                        </a>
                                    </h3>
                                    <p>
                                        Zesty Cali celebration: fresh veggies,
                                        bold flavors, golden thin-crust
                                    </p>
                                    <p className="price">
                                        <span className="currency">$</span>220
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="menu-item style-six mb-30 text-center wow fadeInUp">
                                <div className="menu-thumbnail">
                                    <img
                                        src="assets/images/menu/menu-15.png"
                                        alt="Menu image"
                                    />
                                </div>
                                <div className="menu-info">
                                    <h3 className="title">
                                        <a href="menu-details.html">
                                            Bacon cheese
                                        </a>
                                    </h3>
                                    <p>
                                        Basil bliss, sun-kissed tomatoes, and
                                        mozzarella dance on artisan crust
                                    </p>
                                    <p className="price">
                                        <span className="currency">$</span>180
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="menu-item style-six mb-30 text-center wow fadeInUp">
                                <div className="menu-thumbnail">
                                    <img
                                        src="assets/images/menu/menu-16.png"
                                        alt="Menu image"
                                    />
                                </div>
                                <div className="menu-info">
                                    <h3 className="title">
                                        <a href="menu-details.html">
                                            capriciosa pizza
                                        </a>
                                    </h3>
                                    <p>
                                        Zesty Cali celebration: fresh veggies,
                                        bold flavors, golden thin-crust
                                    </p>
                                    <p className="price">
                                        <span className="currency">$</span>150
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="menu-item style-six mb-30 text-center wow fadeInUp">
                                <div className="menu-thumbnail">
                                    <img
                                        src="assets/images/menu/menu-17.png"
                                        alt="Menu image"
                                    />
                                </div>
                                <div className="menu-info">
                                    <h3 className="title">
                                        <a href="menu-details.html">
                                            pepperoni Pizza
                                        </a>
                                    </h3>
                                    <p>
                                        Melting mozzarella atop a crisp crust a
                                        timeless cheese pizza
                                    </p>
                                    <p className="price">
                                        <span className="currency">$</span>170
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--====== End Choose Food Section ======--> */}
            {/* <!--====== Start Booking Section ======--> */}
            <section className="booking-map-section">
                <div className="booking-map-wrapper">
                    <div className="map-box">
                        <iframe
                            height="704"
                            src="https://maps.google.com/maps?q=new%20york&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                        ></iframe>
                    </div>
                    <div className="booking-form-wrapper">
                        <div className="section-content-box wow fadeInUp">
                            <div className="section-title text-white">
                                <span className="sub-title">Table booking</span>
                                <h2>BOOK A TABLE</h2>
                            </div>
                            <p className=" mb-35">
                                Happy Sunday Premium Pizza is a delightful blend
                                of grilled chicken Italian sausage.
                            </p>
                            <form className="booking-form-two">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form_group">
                                            <input
                                                type="text"
                                                className="form_control"
                                                placeholder="Full Name"
                                                name="name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form_group">
                                            <input
                                                type="email"
                                                className="form_control"
                                                placeholder="Email Address"
                                                name="email"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form_group">
                                            <select className="wide">
                                                <option value="01">
                                                    01 People
                                                </option>
                                                <option value="02">
                                                    02 People
                                                </option>
                                                <option value="03">
                                                    03 People
                                                </option>
                                                <option value="04">
                                                    04 People
                                                </option>
                                                <option value="05">
                                                    05 People
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form_group">
                                            <select className="wide">
                                                <option data-display="Time">
                                                    10.00am-12.00Pm
                                                </option>
                                                <option value="01">
                                                    11.00Pm-02.00Pm
                                                </option>
                                                <option value="02">
                                                    02.00pm-04.00Pm
                                                </option>
                                                <option value="03">
                                                    04.00pm-07.00Pm
                                                </option>
                                                <option value="04">
                                                    06.p0am-10.00Pm0
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form_group">
                                            <button className="theme-btn style-one">
                                                Book A Table
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--====== End Booking Section ======--> */}
            {/* <!--====== Start Chefs Section ======--> */}
            <section className="chefs-section pt-120 pb-85">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <!--=== Section Title ===--> */}
                            <div className="section-title text-center mb-55 wow fadeInDown">
                                <span className="sub-title">Meet Our Chef</span>
                                <h2>Our Special Chef</h2>
                                <p>
                                    Savor gourmet perfection with Our Special
                                    Chef's creations, where passion and
                                    expertise unite for an extraordinary
                                    culinary.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-md-6 col-sm-12">
                            {/* <!--=== Chefs Item ===--> */}
                            <div className="team-item style-one mb-40 wow fadeInUp">
                                <div className="member-image">
                                    <img
                                        src="assets/images/team/team-10.jpg"
                                        alt="Chefs image"
                                    />
                                    <ul className="social-link">
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="member-info">
                                    <h4 className="title">David Liam</h4>
                                    <span className="position">
                                        Special Chef
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-12">
                            {/* <!--=== Chefs Item ===--> */}
                            <div className="team-item style-one mb-40 wow fadeInUp">
                                <div className="member-image">
                                    <img
                                        src="assets/images/team/team-11.jpg"
                                        alt="Chefs image"
                                    />
                                    <ul className="social-link">
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="member-info">
                                    <h4 className="title">Olivia Ava</h4>
                                    <span className="position">
                                        Special Chef
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-12">
                            {/* <!--=== Chefs Item ===--> */}
                            <div className="team-item style-one mb-40 wow fadeInUp">
                                <div className="member-image">
                                    <img
                                        src="assets/images/team/team-12.jpg"
                                        alt="Chefs image"
                                    />
                                    <ul className="social-link">
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="member-info">
                                    <h4 className="title">John Jonson</h4>
                                    <span className="position">
                                        Special Chef
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-12">
                            {/* <!--=== Chefs Item ===--> */}
                            <div className="team-item style-one mb-40 wow fadeInUp">
                                <div className="member-image">
                                    <img
                                        src="assets/images/team/team-13.jpg"
                                        alt="Chefs image"
                                    />
                                    <ul className="social-link">
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="member-info">
                                    <h4 className="title">Alex Mika</h4>
                                    <span className="position">
                                        Special Chef
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--====== End Chefs Section ======--> */}
            {/* <!--====== Start Intro Section ======--> */}
            <section className="intro-section">
                {/* <!--=== Intro Wrapper ===--> */}
                <div
                    className="intro-wrapper_one bg_cover pt-130 pb-70"
                    style={{ backgroundImage: "url(assets/images/bg/intro-bg-3.jpg)" }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* <!--=== Section Content Box ===--> */}
                                <div className="section-content-box text-center wow fadeInDown">
                                    <a
                                        href="https://www.youtube.com/watch?v=Xj4E0Zry6K4"
                                        className="video-popup"
                                    >
                                        <i className="fas fa-play"></i>
                                    </a>
                                    <div className="section-title text-white mb-50">
                                        <h2>
                                            Possibilities Between Every <br />{" "}
                                            Sushi Bite
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{" "}
            {/* <!--====== End Intro Section ======--> */}
            {/* <!--====== Start Testimonial Section ======--> */}
            <section className="testimonial-section pt-120 pb-130">
                <div className="container">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* <!--=== Section Title ===--> */}
                                <div className="section-title text-center mb-55 wow fadeInDown">
                                    <span className="sub-title">
                                        Testimonial
                                    </span>
                                    <h2>Our Customer Say</h2>
                                    <p>
                                        Highlight specific aspects of the
                                        product or service that are relevant to
                                        your target audience. Focus on features
                                        or customers are likely to find
                                        compelling.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* <!--=== Testimonial Slider Two ===--> */}
                            <div className="testimonial-slider-two wow fadeInUp">
                                {/* <!--=== Testimonial Item ===--> */}
                                <div className="testimonial-item style-two mb-40">
                                    <div className="testimonial-content">
                                        <div className="author-thumb-item">
                                            <div className="author-thumb">
                                                <img
                                                    src="assets/images/testimonial/author-4.jpg"
                                                    alt="author image"
                                                />
                                            </div>
                                            <div className="author-info">
                                                <h5>Jane Cooper</h5>
                                                <span>A week ago</span>
                                            </div>
                                        </div>
                                        <p>
                                            Explore 'Our Gallery'—a visual
                                            symphony of delectable pizzas. Feast
                                            your eyes on our culinary creations,
                                            each image.
                                        </p>
                                        <ul className="ratings rating-four">
                                            <li>
                                                <i className="fas fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fas fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fas fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fas fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fas fa-star"></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!--=== Testimonial Item ===--> */}
                                <div className="testimonial-item style-two mb-40">
                                    <div className="testimonial-content">
                                        <div className="author-thumb-item">
                                            <div className="author-thumb">
                                                <img
                                                    src="assets/images/testimonial/author-5.jpg"
                                                    alt="author image"
                                                />
                                            </div>
                                            <div className="author-info">
                                                <h5>Jane Cooper</h5>
                                                <span>A week ago</span>
                                            </div>
                                        </div>
                                        <p>
                                            Explore 'Our Gallery'—a visual
                                            symphony of delectable pizzas. Feast
                                            your eyes on our culinary creations,
                                            each image.
                                        </p>
                                        <ul className="ratings rating-four">
                                            <li>
                                                <i className="fas fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fas fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fas fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fas fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fas fa-star"></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!--=== Testimonial Item ===--> */}
                                <div className="testimonial-item style-two mb-40">
                                    <div className="testimonial-content">
                                        <div className="author-thumb-item">
                                            <div className="author-thumb">
                                                <img
                                                    src="assets/images/testimonial/author-4.jpg"
                                                    alt="author image"
                                                />
                                            </div>
                                            <div className="author-info">
                                                <h5>Jane Cooper</h5>
                                                <span>A week ago</span>
                                            </div>
                                        </div>
                                        <p>
                                            Explore 'Our Gallery'—a visual
                                            symphony of delectable pizzas. Feast
                                            your eyes on our culinary creations,
                                            each image.
                                        </p>
                                        <ul className="ratings rating-four">
                                            <li>
                                                <i className="fas fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fas fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fas fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fas fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fas fa-star"></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{" "}
            {/* <!--====== End Testimonial Section ======--> */}
            {/* <!--====== Start Gallery Section ======--> */}
            <section className="gallery-section">
                <div
                    className="gallery-wrapper-bg bg_cover pt-120 pb-130"
                    style={{ backgroundImage: "url(assets/images/bg/gallery-bg.jpg)" }}
                >
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="section-title section-title-left mb-50 wow fadeInLeft">
                                    <span className="sub-title">
                                        Explore Gallery
                                    </span>
                                    <h2>Our Gallery</h2>
                                    <p>
                                        Explore 'Our Gallery'—a visual symphony
                                        of delectable pizzas. Feast your eyes on
                                        our culinary creations, each image.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="circle-button float-lg-end mb-50 wow fadeInRight">
                                    <a
                                        href="gallery.html"
                                        className="circle-btn"
                                    >
                                        <span>View All</span>
                                        <i className="far fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-slider-wrapper wow fadeInDown">
                            <div className="gallery-slider-two">
                                <div className="gallery-item style-four">
                                    <div className="gallery-img">
                                        <img
                                            src="assets/images/gallery/gallery-11.jpg"
                                            alt="Gallery image"
                                        />
                                    </div>
                                </div>
                                <div className="gallery-item style-four">
                                    <div className="gallery-img">
                                        <img
                                            src="assets/images/gallery/gallery-12.jpg"
                                            alt="Gallery image"
                                        />
                                    </div>
                                </div>
                                <div className="gallery-item style-four">
                                    <div className="gallery-img">
                                        <img
                                            src="assets/images/gallery/gallery-13.jpg"
                                            alt="Gallery image"
                                        />
                                    </div>
                                </div>
                                <div className="gallery-item style-four">
                                    <div className="gallery-img">
                                        <img
                                            src="assets/images/gallery/gallery-12.jpg"
                                            alt="Gallery image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{" "}
            {/* <!--====== End Gallery Section ======--> */}
            {/* <!--====== Start Instagram Section ======--> */}
            <section className="insta-gallery-section pt-120">
                <div className="instagram-wrapper-two wow fadeInUp">
                    <div className="instagram-slider-one">
                        <div className="gallery-item style-one">
                            <div className="gallery-img">
                                <img
                                    src="assets/images/instagram/insta-12.jpg"
                                    alt="gallery image"
                                />
                                <div className="hover-content">
                                    <a
                                        href="assets/images/instagram/insta-12.jpg"
                                        className="insta-icon img-popup"
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-item style-one">
                            <div className="gallery-img">
                                <img
                                    src="assets/images/instagram/insta-13.jpg"
                                    alt="gallery image"
                                />
                                <div className="hover-content">
                                    <a
                                        href="assets/images/instagram/insta-12.jpg"
                                        className="insta-icon img-popup"
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-item style-one">
                            <div className="gallery-img">
                                <img
                                    src="assets/images/instagram/insta-14.jpg"
                                    alt="gallery image"
                                />
                                <div className="hover-content">
                                    <a
                                        href="assets/images/instagram/insta-12.jpg"
                                        className="insta-icon img-popup"
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-item style-one">
                            <div className="gallery-img">
                                <img
                                    src="assets/images/instagram/insta-15.jpg"
                                    alt="gallery image"
                                />
                                <div className="hover-content">
                                    <a
                                        href="assets/images/instagram/insta-12.jpg"
                                        className="insta-icon img-popup"
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-item style-one">
                            <div className="gallery-img">
                                <img
                                    src="assets/images/instagram/insta-16.jpg"
                                    alt="gallery image"
                                />
                                <div className="hover-content">
                                    <a
                                        href="assets/images/instagram/insta-12.jpg"
                                        className="insta-icon img-popup"
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-item style-one">
                            <div className="gallery-img">
                                <img
                                    src="assets/images/instagram/insta-17.jpg"
                                    alt="gallery image"
                                />
                                <div className="hover-content">
                                    <a
                                        href="assets/images/instagram/insta-12.jpg"
                                        className="insta-icon img-popup"
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-item style-one">
                            <div className="gallery-img">
                                <img
                                    src="assets/images/instagram/insta-16.jpg"
                                    alt="gallery image"
                                />
                                <div className="hover-content">
                                    <a
                                        href="assets/images/instagram/insta-12.jpg"
                                        className="insta-icon img-popup"
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{" "}
            {/* <!--====== End Gallery Section ======--> */}
            {/* <!--=== Start Footer ===--> */}
            {/* <!--====== Start Footer ======--> */}
            <footer className="footer-default p-r z-1">
                <div className="footer-shape f-shape_one scene">
                    <span data-depth=".3">
                        <img
                            src="assets/images/shape/shape-2.png"
                            alt="shape"
                        />
                    </span>
                </div>
                <div className="footer-shape f-shape_two scene">
                    <span data-depth=".4">
                        <img
                            src="assets/images/shape/shape-3.png"
                            alt="shape"
                        />
                    </span>
                </div>
                <div className="footer-shape f-shape_three scene">
                    <span data-depth=".5">
                        <img
                            src="assets/images/shape/shape-4.png"
                            alt="shape"
                        />
                    </span>
                </div>
                <div className="footer-shape f-shape_four scene">
                    <span data-depth=".6">
                        <img
                            src="assets/images/shape/shape-5.png"
                            alt="shape"
                        />
                    </span>
                </div>
                <div className="footer-shape f-shape_five scene">
                    <span data-depth=".7">
                        <img
                            src="assets/images/shape/shape-6.png"
                            alt="shape"
                        />
                    </span>
                </div>
                <div className="footer-shape f-shape_six scene">
                    <span data-depth=".8">
                        <img
                            src="assets/images/shape/shape-7.png"
                            alt="shape"
                        />
                    </span>
                </div>
                <div className="footer-shape f-shape_seven scene">
                    <span data-depth=".9">
                        <img
                            src="assets/images/shape/shape-8.png"
                            alt="shape"
                        />
                    </span>
                </div>
                <div className="container">
                    {/* <!--=== Footer Widget Area ===--> */}
                    <div className="footer-widget-area pt-270 pb-75">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                {/* <!--=== Footer Widget ===--> */}
                                <div className="footer-widget footer-about-widget mb-40 wow fadeInUp">
                                    <div className="widget-content">
                                        <div className="footer-logo mb-25">
                                            <a href="index.html">
                                                <img
                                                    src="assets/images/logo/logo-white.png"
                                                    alt="Brand Logo"
                                                />
                                            </a>
                                        </div>
                                        <p>
                                            Discover culinary delights recipes
                                            and inspiration in our delightful
                                            food haven..
                                        </p>
                                        <ul className="social-link">
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-youtube"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                {/* <!--=== Footer Widget ===--> */}
                                <div className="footer-widget footer-contact-widget mb-40 wow fadeInUp">
                                    <div className="widget-content">
                                        <h4 className="widget-title">
                                            Contact Us
                                        </h4>
                                        <ul className="address-list">
                                            <li>
                                                1901 Thornridge Cir. Shiloh,
                                                Hawaii 81063
                                            </li>
                                            <li>
                                                <a href="tel:+88-344-667-999">
                                                    +88-344-667-999
                                                </a>
                                            </li>
                                            <li>
                                                <a href="mailto:order@barger.com">
                                                    order@foodix.com
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                {/* <!--=== Footer Widget ===--> */}
                                <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
                                    <div className="widget-content">
                                        <h4 className="widget-title">
                                            Quick Link
                                        </h4>
                                        <ul className="widget-menu">
                                            <li>
                                                <a href="#">Home</a>
                                            </li>
                                            <li>
                                                <a href="#">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#">Services</a>
                                            </li>
                                            <li>
                                                <a href="#">Our Menu</a>
                                            </li>
                                            <li>
                                                <a href="#">Gallery</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                {/* <!--=== Footer Widget ===--> */}
                                <div className="footer-widget footer-opening-widget mb-40 wow fadeInUp">
                                    <div className="widget-content">
                                        <h4 className="widget-title">
                                            Opining time
                                        </h4>
                                        <ul className="opening-schedule">
                                            <li>
                                                Monday
                                                <span>
                                                    : 10.00am - 05.00pm{" "}
                                                </span>
                                            </li>
                                            <li>
                                                Tuesday
                                                <span>
                                                    : 10.20am - 05.30pm{" "}
                                                </span>
                                            </li>
                                            <li>
                                                Wednesday
                                                <span>
                                                    : 10.30am - 05.50pm{" "}
                                                </span>
                                            </li>
                                            <li>
                                                Thursday
                                                <span>
                                                    : 11.00am - 07.10pm{" "}
                                                </span>
                                            </li>
                                            <li>
                                                Friday :{" "}
                                                <span className="of-close">
                                                    Closed
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--=== Copyright Area ===--> */}
                <div className="copyright-area text-center">
                    <div className="container">
                        <div className="copyright-text">
                            <p>
                                &copy; 2024 All rights reserved design by
                                Pixelfit
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!--====== End Footer ======--> */}
        </>
    );
};
export default App;
