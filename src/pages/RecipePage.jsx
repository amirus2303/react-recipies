import { Footer } from "../components";

const RecipePage = () => {
    return (
        <>
            <section className="page-banner">
                <div
                    className="page-bg-wrapper p-r z-1 bg_cover pt-100 pb-110"
                    style={{ backgroundImage: `url(/assets/images/bg/page-bg.jpg)` }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* <!--=== Page Banner Content ===--> */}
                                <div className="page-banner-content text-center">
                                    <h1 className="page-title">Menu Details</h1>
                                    <ul className="breadcrumb-link">
                                        <li>
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li className="active">Menu Details</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--====== End Page Section ======--> */}
            {/* <!--====== Start Menu Section ======--> */}
            <section className="menu-details-section pt-130 pb-65">
                <div className="container">
                    {/* <!--=== Menu Details Wrapper ===--> */}
                    <div className="menu-details-wrapper">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                {/* <!--=== Menu Image ===--> */}
                                <div className="menu-image mb-50 wow fadeInLeft">
                                    <img
                                        src="/assets/images/product/product-single-1.jpg"
                                        alt="Product Image"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                {/* <!--=== Menu Info ===--> */}
                                <div className="menu-info-content mb-50 wow fadeInRight">
                                    <h4 className="title">
                                        Gourmet Griddl Masterpiece
                                    </h4>
                                    <p>
                                        Plant-based dining is no longer a niche
                                        it's a movement. Chefs are pushing the
                                        boundaries of creativity.
                                    </p>
                                    <span className="price">
                                        <span className="currency">$</span>39.92{" "}
                                        <span className="pre-price">
                                            <span className="currency">$</span>
                                            45.25
                                        </span>
                                    </span>
                                    <div className="product-cart-variation">
                                        <ul>
                                            <li>
                                                <div className="quantity-input">
                                                    <button className="quantity-down">
                                                        <i className="far fa-minus"></i>
                                                    </button>
                                                    <input
                                                        className="quantity"
                                                        type="text"
                                                        value="1"
                                                        name="quantity"
                                                    />
                                                    <button className="quantity-up">
                                                        <i className="far fa-plus"></i>
                                                    </button>
                                                </div>
                                            </li>
                                            <li>
                                                <select className="wide">
                                                    <option data-display="Variation Size">
                                                        Small
                                                    </option>
                                                    <option>Medium</option>
                                                    <option>Large</option>
                                                </select>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="add-to-cart">
                                        <button className="theme-btn style-one">
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6">
                                {/* <!--=== Description Content Wrapper ===--> */}
                                <div className="description-content-wrapper mb-30 wow fadeInDown">
                                    {/* <!--=== Foodix Tabs ===--> */}
                                    <div className="foodix-tabs style-three mb-20">
                                        <ul className="nav nav-tabs wow fadeInDown">
                                            <li>
                                                <button
                                                    className="nav-link active"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#cat1"
                                                >
                                                    Food Details
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    className="nav-link"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#cat2"
                                                >
                                                    Food Video
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    className="nav-link"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#cat3"
                                                >
                                                    Reviews
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!--=== Foodix Tab Content ===--> */}
                                    <div className="tab-content">
                                        {/* <!--=== Tab Pane ===--> */}
                                        <div
                                            className="tab-pane fade show active"
                                            id="cat1"
                                        >
                                            <div className="content-box">
                                                <p>
                                                    Indulge in a mouthwatering
                                                    culinary delight with our
                                                    Chicken Skewers paired with
                                                    vibrant slices of sweet bell
                                                    peppers. Tender pieces of
                                                    succulent chicken are
                                                    marinated to perfection,
                                                    resulting in a flavorful and
                                                    juicy experience.
                                                </p>
                                                <h4>Ingredients:</h4>
                                                <ul className="check-list mb-30">
                                                    <li>
                                                        Fresh chicken breast or
                                                        thigh meat, cubed
                                                    </li>
                                                    <li>
                                                        Assorted sweet bell
                                                        peppers sliced into
                                                        rings
                                                    </li>
                                                    <li>
                                                        Marinade (your choice of
                                                        herbs, spices, and
                                                        seasonings)
                                                    </li>
                                                    <li>Olive oil</li>
                                                    <li>Salt and pepper</li>
                                                </ul>
                                                <h4>Preparation:</h4>
                                                <ul className="check-list mb-30">
                                                    <li>
                                                        Enjoy the skewers with a
                                                        side of fresh salad or
                                                        rice
                                                    </li>
                                                    <li>
                                                        Drizzle with a zesty
                                                        lemon or lime juice for
                                                        an extra burst of flavor
                                                    </li>
                                                    <li>
                                                        Pair with your favorite
                                                        dipping sauce or chutney
                                                        for added variety
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="cat2"
                                        >
                                            <div className="content-box">
                                                <p>
                                                    Indulge in a mouthwatering
                                                    culinary delight with our
                                                    Chicken Skewers paired with
                                                    vibrant slices of sweet bell
                                                    peppers. Tender pieces of
                                                    succulent chicken are
                                                    marinated to perfection,
                                                    resulting in a flavorful and
                                                    juicy experience.
                                                </p>
                                                <h4>Ingredients:</h4>
                                                <ul className="check-list mb-30">
                                                    <li>
                                                        Fresh chicken breast or
                                                        thigh meat, cubed
                                                    </li>
                                                    <li>
                                                        Assorted sweet bell
                                                        peppers sliced into
                                                        rings
                                                    </li>
                                                    <li>
                                                        Marinade (your choice of
                                                        herbs, spices, and
                                                        seasonings)
                                                    </li>
                                                    <li>Olive oil</li>
                                                    <li>Salt and pepper</li>
                                                </ul>
                                                <h4>Preparation:</h4>
                                                <ul className="check-list mb-30">
                                                    <li>
                                                        Enjoy the skewers with a
                                                        side of fresh salad or
                                                        rice
                                                    </li>
                                                    <li>
                                                        Drizzle with a zesty
                                                        lemon or lime juice for
                                                        an extra burst of flavor
                                                    </li>
                                                    <li>
                                                        Pair with your favorite
                                                        dipping sauce or chutney
                                                        for added variety
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="cat3"
                                        >
                                            <div className="content-box">
                                                <p>
                                                    Indulge in a mouthwatering
                                                    culinary delight with our
                                                    Chicken Skewers paired with
                                                    vibrant slices of sweet bell
                                                    peppers. Tender pieces of
                                                    succulent chicken are
                                                    marinated to perfection,
                                                    resulting in a flavorful and
                                                    juicy experience.
                                                </p>
                                                <h4>Ingredients:</h4>
                                                <ul className="check-list mb-30">
                                                    <li>
                                                        Fresh chicken breast or
                                                        thigh meat, cubed
                                                    </li>
                                                    <li>
                                                        Assorted sweet bell
                                                        peppers sliced into
                                                        rings
                                                    </li>
                                                    <li>
                                                        Marinade (your choice of
                                                        herbs, spices, and
                                                        seasonings)
                                                    </li>
                                                    <li>Olive oil</li>
                                                    <li>Salt and pepper</li>
                                                </ul>
                                                <h4>Preparation:</h4>
                                                <ul className="check-list mb-30">
                                                    <li>
                                                        Enjoy the skewers with a
                                                        side of fresh salad or
                                                        rice
                                                    </li>
                                                    <li>
                                                        Drizzle with a zesty
                                                        lemon or lime juice for
                                                        an extra burst of flavor
                                                    </li>
                                                    <li>
                                                        Pair with your favorite
                                                        dipping sauce or chutney
                                                        for added variety
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="foodix-banner-wrapper">
                                    {/* <!--=== Foodix Banner ===--> */}
                                    <div className="foodix-banner-item style-three mb-30 wow fadeInUp">
                                        <div
                                            className="banner-inner-wrap bg_cover"
                                            style= {{ backgroundImage: `url(assets/images/bg/banner-bg-3.jpg)` }}
                                        >
                                            <div className="banner-img">
                                                <img
                                                    src="assets/images/bg/bn-img-1.png"
                                                    alt="banner Image"
                                                />
                                            </div>
                                            <div className="banner-content">
                                                <span>Premium skewers</span>
                                                <h3>chicken skewers</h3>
                                                <p>
                                                    Savor the tantalizing taste
                                                    of our expertly grilled
                                                    chicken skewers, marinated.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--=== Foodix Banner ===--> */}
                                    <div className="foodix-banner-item style-three mb-30 wow fadeInUp">
                                        <div
                                            className="banner-inner-wrap bg_cover"
                                            style={{ backgroundImage: `url(/assets/images/bg/banner-bg-4.jpg)` }}
                                        >
                                            <div className="banner-img">
                                                <img
                                                    src="/assets/images/bg/bn-img-2.png"
                                                    alt="banner Image"
                                                />
                                            </div>
                                            <div className="banner-content">
                                                <span>Premium Wrap</span>
                                                <h3>chicken Wrap</h3>
                                                <p>
                                                    Indulge in our savory
                                                    chicken wrap, a delightful
                                                    blend of tender grilled
                                                    chicken.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--=== Releted Item WRapper ===--> */}
                        <div className="releted-item-wrap pt-45">
                            {/* <!--=== Releted Title ===--> */}
                            <h3 className="releted-title mb-30 wow fadeInDown">
                                Related items
                            </h3>
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    {/* <!--=== Menu Item ===--> */}
                                    <div className="menu-item related-menu-item text-center mb-30 wow fadeInUp">
                                        <div className="menu-Image">
                                            <img
                                                src="/assets/images/product/releted-1.png"
                                                alt="Image"
                                            />
                                        </div>
                                        <div className="menu-info">
                                            <h4 className="title">
                                                <a href="menu-v3.html">
                                                    Cheese Pizza
                                                </a>
                                            </h4>
                                            <p>
                                                Melting mozzarella atop a crisp
                                                crust a timeless cheese pizza
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    {/* <!--=== Menu Item ===--> */}
                                    <div className="menu-item related-menu-item text-center mb-30 wow fadeInUp">
                                        <div className="menu-Image">
                                            <img
                                                src="/assets/images/product/releted-2.png"
                                                alt="Image"
                                            />
                                        </div>
                                        <div className="menu-info">
                                            <h4 className="title">
                                                <a href="menu-v3.html">
                                                    chicken pizza
                                                </a>
                                            </h4>
                                            <p>
                                                Melting mozzarella atop a crisp
                                                crust a timeless cheese pizza
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    {/* <!--=== Menu Item ===--> */}
                                    <div className="menu-item related-menu-item text-center mb-30 wow fadeInUp">
                                        <div className="menu-Image">
                                            <img
                                                src="/assets/images/product/releted-3.png"
                                                alt="Image"
                                            />
                                        </div>
                                        <div className="menu-info">
                                            <h4 className="title">
                                                <a href="menu-v3.html">
                                                    Garden veggie
                                                </a>
                                            </h4>
                                            <p>
                                                Melting mozzarella atop a crisp
                                                crust a timeless cheese pizza
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--====== End Menu Section ======--> */}
            <Footer />
        </>
    );
};
export default RecipePage;
