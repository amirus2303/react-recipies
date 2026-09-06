import { Footer } from "../components"

const RecipiesListPage = () => {
  return (
    <>
    <section className="page-banner">
            <div className="page-bg-wrapper p-r z-1 bg_cover pt-100 pb-110" style={{ backgroundImage: `url(assets/images/bg/page-bg.jpg)` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <!--=== Page Banner Content ===--> */}
                            <div className="page-banner-content text-center">
                                <h1 className="page-title">Menu Restaurant</h1>
                                <ul className="breadcrumb-link">
                                    <li><a href="index.html">Home</a></li>
                                    <li className="active">Menu Restaurant</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>{/* <!--====== End Page Section ======--> */}
        {/* <!--====== Start Menu Page Section ======--> */}
        <section className="menu-grid-section gray-bg pt-110 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center mb-55">
                            <h2>CHOOSE MENU</h2>
                            <p>Indulge in an array of meticulously crafted sushi rolls, artfully blending <br /> fresh ingredients for a delightful taste experience.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="foodix-tabs style-two mb-70">
                            <ul className="nav nav-tabs wow fadeInDown">
                                <li>
                                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#cat1">Beef</button>
                                </li>
                                <li>
                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#cat2" >Grilled</button>
                                </li>
                                <li>
                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#cat3">Sizzling</button>
                                </li>
                                <li>
                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#cat4">Steak Bliss</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="cat1">
                                <div className="row">
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="menu-item style-four mb-30">
                                            <div className="menu-thumbnail">
                                                <img src="assets/images/product/product-1.jpg" alt="Image" />
                                            </div>
                                            <div className="menu-info">
                                                <div className="menu-meta">
                                                    <span className="price"><span className="currency">$</span>18.00</span>
                                                    <span className="rating"><i className="fas fa-star"></i><a href="#">4.7(375)</a></span>
                                                </div>
                                                <h4 className="title"><a href="menu-details.html">Beefy Bourbon Bliss</a></h4>
                                                <ul className="check-list style-one">
                                                    <li><i className="far fa-check-circle"></i>4 Piece Chicken</li>
                                                    <li><i className="far fa-check-circle"></i>Spicy Sauce</li>
                                                </ul>
                                                <a href="menu-details.html" className="theme-btn style-two"><i className="far fa-cart-plus"></i> Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="menu-item style-four mb-30">
                                            <div className="menu-thumbnail">
                                                <img src="assets/images/product/product-2.jpg" alt="Image" />
                                            </div>
                                            <div className="menu-info">
                                                <div className="menu-meta">
                                                    <span className="price"><span className="currency">$</span>18.00</span>
                                                    <span className="rating"><i className="fas fa-star"></i><a href="#">4.7(375)</a></span>
                                                </div>
                                                <h4 className="title"><a href="menu-details.html">Smoked Paprika Sirloin</a></h4>
                                                <ul className="check-list style-one">
                                                    <li><i className="far fa-check-circle"></i>4 Piece Chicken</li>
                                                    <li><i className="far fa-check-circle"></i>Spicy Sauce</li>
                                                </ul>
                                                <a href="menu-details.html" className="theme-btn style-two"><i className="far fa-cart-plus"></i> Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="menu-item style-four mb-30">
                                            <div className="menu-thumbnail">
                                                <img src="assets/images/product/product-3.jpg" alt="Image" />
                                            </div>
                                            <div className="menu-info">
                                                <div className="menu-meta">
                                                    <span className="price"><span className="currency">$</span>18.00</span>
                                                    <span className="rating"><i className="fas fa-star"></i><a href="#">4.7(375)</a></span>
                                                </div>
                                                <h4 className="title"><a href="menu-details.html">Thai Basil Beef Stir-Fry</a></h4>
                                                <ul className="check-list style-one">
                                                    <li><i className="far fa-check-circle"></i>4 Piece Chicken</li>
                                                    <li><i className="far fa-check-circle"></i>Spicy Sauce</li>
                                                </ul>
                                                <a href="menu-details.html" className="theme-btn style-two"><i className="far fa-cart-plus"></i> Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="menu-item style-four mb-30">
                                            <div className="menu-thumbnail">
                                                <img src="assets/images/product/product-4.jpg" alt="Image" />
                                            </div>
                                            <div className="menu-info">
                                                <div className="menu-meta">
                                                    <span className="price"><span className="currency">$</span>18.00</span>
                                                    <span className="rating"><i className="fas fa-star"></i><a href="#">4.7(375)</a></span>
                                                </div>
                                                <h4 className="title"><a href="menu-details.html">Korean BBQ Beef</a></h4>
                                                <ul className="check-list style-one">
                                                    <li><i className="far fa-check-circle"></i>4 Piece Chicken</li>
                                                    <li><i className="far fa-check-circle"></i>Spicy Sauce</li>
                                                </ul>
                                                <a href="menu-details.html" className="theme-btn style-two"><i className="far fa-cart-plus"></i> Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="menu-item style-four mb-30">
                                            <div className="menu-thumbnail">
                                                <img src="assets/images/product/product-5.jpg" alt="Image" />
                                            </div>
                                            <div className="menu-info">
                                                <div className="menu-meta">
                                                    <span className="price"><span className="currency">$</span>18.00</span>
                                                    <span className="rating"><i className="fas fa-star"></i><a href="#">4.7(375)</a></span>
                                                </div>
                                                <h4 className="title"><a href="menu-details.html">Beef Bourguignon</a></h4>
                                                <ul className="check-list style-one">
                                                    <li><i className="far fa-check-circle"></i>4 Piece Chicken</li>
                                                    <li><i className="far fa-check-circle"></i>Spicy Sauce</li>
                                                </ul>
                                                <a href="menu-details.html" className="theme-btn style-two"><i className="far fa-cart-plus"></i> Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="menu-item style-four mb-30">
                                            <div className="menu-thumbnail">
                                                <img src="assets/images/product/product-6.jpg" alt="Image" />
                                            </div>
                                            <div className="menu-info">
                                                <div className="menu-meta">
                                                    <span className="price"><span className="currency">$</span>18.00</span>
                                                    <span className="rating"><i className="fas fa-star"></i><a href="#">4.7(375)</a></span>
                                                </div>
                                                <h4 className="title"><a href="menu-details.html">Beef Wellington</a></h4>
                                                <ul className="check-list style-one">
                                                    <li><i className="far fa-check-circle"></i>4 Piece Chicken</li>
                                                    <li><i className="far fa-check-circle"></i>Spicy Sauce</li>
                                                </ul>
                                                <a href="menu-details.html" className="theme-btn style-two"><i className="far fa-cart-plus"></i> Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="cat2">
                                <div className="row">
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="menu-item style-four mb-30">
                                            <div className="menu-thumbnail">
                                                <img src="assets/images/product/product-1_1.jpg" alt="Image" />
                                            </div>
                                            <div className="menu-info">
                                                <div className="menu-meta">
                                                    <span className="price"><span className="currency">$</span>18.00</span>
                                                    <span className="rating"><i className="fas fa-star"></i><a href="#">4.7(375)</a></span>
                                                </div>
                                                <h4 className="title"><a href="menu-details.html">Beefy Bourbon Bliss</a></h4>
                                                <ul className="check-list style-one">
                                                    <li><i className="far fa-check-circle"></i>4 Piece Chicken</li>
                                                    <li><i className="far fa-check-circle"></i>Spicy Sauce</li>
                                                </ul>
                                                <a href="menu-details.html" className="theme-btn style-two"><i className="far fa-cart-plus"></i> Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="menu-item style-four mb-30">
                                            <div className="menu-thumbnail">
                                                <img src="assets/images/product/product-1_2.jpg" alt="Image" />
                                            </div>
                                            <div className="menu-info">
                                                <div className="menu-meta">
                                                    <span className="price"><span className="currency">$</span>18.00</span>
                                                    <span className="rating"><i className="fas fa-star"></i><a href="#">4.7(375)</a></span>
                                                </div>
                                                <h4 className="title"><a href="menu-details.html">Smoked Paprika Sirloin</a></h4>
                                                <ul className="check-list style-one">
                                                    <li><i className="far fa-check-circle"></i>4 Piece Chicken</li>
                                                    <li><i className="far fa-check-circle"></i>Spicy Sauce</li>
                                                </ul>
                                                <a href="menu-details.html" className="theme-btn style-two"><i className="far fa-cart-plus"></i> Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="menu-item style-four mb-30">
                                            <div className="menu-thumbnail">
                                                <img src="assets/images/product/product-1_3.jpg" alt="Image" />
                                            </div>
                                            <div className="menu-info">
                                                <div className="menu-meta">
                                                    <span className="price"><span className="currency">$</span>18.00</span>
                                                    <span className="rating"><i className="fas fa-star"></i><a href="#">4.7(375)</a></span>
                                                </div>
                                                <h4 className="title"><a href="menu-details.html">Thai Basil Beef Stir-Fry</a></h4>
                                                <ul className="check-list style-one">
                                                    <li><i className="far fa-check-circle"></i>4 Piece Chicken</li>
                                                    <li><i className="far fa-check-circle"></i>Spicy Sauce</li>
                                                </ul>
                                                <a href="menu-details.html" className="theme-btn style-two"><i className="far fa-cart-plus"></i> Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="menu-item style-four mb-30">
                                            <div className="menu-thumbnail">
                                                <img src="assets/images/product/product-1_4.jpg" alt="Image" />
                                            </div>
                                            <div className="menu-info">
                                                <div className="menu-meta">
                                                    <span className="price"><span className="currency">$</span>18.00</span>
                                                    <span className="rating"><i className="fas fa-star"></i><a href="#">4.7(375)</a></span>
                                                </div>
                                                <h4 className="title"><a href="menu-details.html">Korean BBQ Beef</a></h4>
                                                <ul className="check-list style-one">
                                                    <li><i className="far fa-check-circle"></i>4 Piece Chicken</li>
                                                    <li><i className="far fa-check-circle"></i>Spicy Sauce</li>
                                                </ul>
                                                <a href="menu-details.html" className="theme-btn style-two"><i className="far fa-cart-plus"></i> Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="menu-item style-four mb-30">
                                            <div className="menu-thumbnail">
                                                <img src="assets/images/product/product-1_5.jpg" alt="Image" />
                                            </div>
                                            <div className="menu-info">
                                                <div className="menu-meta">
                                                    <span className="price"><span className="currency">$</span>18.00</span>
                                                    <span className="rating"><i className="fas fa-star"></i><a href="#">4.7(375)</a></span>
                                                </div>
                                                <h4 className="title"><a href="menu-details.html">Beef Bourguignon</a></h4>
                                                <ul className="check-list style-one">
                                                    <li><i className="far fa-check-circle"></i>4 Piece Chicken</li>
                                                    <li><i className="far fa-check-circle"></i>Spicy Sauce</li>
                                                </ul>
                                                <a href="menu-details.html" className="theme-btn style-two"><i className="far fa-cart-plus"></i> Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="menu-item style-four mb-30">
                                            <div className="menu-thumbnail">
                                                <img src="assets/images/product/product-1_6.jpg" alt="Image" />
                                            </div>
                                            <div className="menu-info">
                                                <div className="menu-meta">
                                                    <span className="price"><span className="currency">$</span>18.00</span>
                                                    <span className="rating"><i className="fas fa-star"></i><a href="#">4.7(375)</a></span>
                                                </div>
                                                <h4 className="title"><a href="menu-details.html">Beef Wellington</a></h4>
                                                <ul className="check-list style-one">
                                                    <li><i className="far fa-check-circle"></i>4 Piece Chicken</li>
                                                    <li><i className="far fa-check-circle"></i>Spicy Sauce</li>
                                                </ul>
                                                <a href="menu-details.html" className="theme-btn style-two"><i className="far fa-cart-plus"></i> Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="cat3">
                                <div className="row">
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="menu-item style-four mb-30">
                                            <div className="menu-thumbnail">
                                                <img src="assets/images/product/product-1_7.jpg" alt="Image" />
                                            </div>
                                            <div className="menu-info">
                                                <div className="menu-meta">
                                                    <span className="price"><span className="currency">$</span>18.00</span>
                                                    <span className="rating"><i className="fas fa-star"></i><a href="#">4.7(375)</a></span>
                                                </div>
                                                <h4 className="title"><a href="menu-details.html">Prawn Sizzling</a></h4>
                                                <ul className="check-list style-one">
                                                    <li><i className="far fa-check-circle"></i>4 Piece Chicken</li>
                                                    <li><i className="far fa-check-circle"></i>Spicy Sauce</li>
                                                </ul>
                                                <a href="menu-details.html" className="theme-btn style-two"><i className="far fa-cart-plus"></i> Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="menu-item style-four mb-30">
                                            <div className="menu-thumbnail">
                                                <img src="assets/images/product/product-1_8.jpg" alt="Image" />
                                            </div>
                                            <div className="menu-info">
                                                <div className="menu-meta">
                                                    <span className="price"><span className="currency">$</span>18.00</span>
                                                    <span className="rating"><i className="fas fa-star"></i><a href="#">4.7(375)</a></span>
                                                </div>
                                                <h4 className="title"><a href="menu-details.html">Mutton Sizzling</a></h4>
                                                <ul className="check-list style-one">
                                                    <li><i className="far fa-check-circle"></i>4 Piece Chicken</li>
                                                    <li><i className="far fa-check-circle"></i>Spicy Sauce</li>
                                                </ul>
                                                <a href="menu-details.html" className="theme-btn style-two"><i className="far fa-cart-plus"></i> Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="menu-item style-four mb-30">
                                            <div className="menu-thumbnail">
                                                <img src="assets/images/product/product-1_9.jpg" alt="Image" />
                                            </div>
                                            <div className="menu-info">
                                                <div className="menu-meta">
                                                    <span className="price"><span className="currency">$</span>18.00</span>
                                                    <span className="rating"><i className="fas fa-star"></i><a href="#">4.7(375)</a></span>
                                                </div>
                                                <h4 className="title"><a href="menu-details.html">Prawn Sizzling</a></h4>
                                                <ul className="check-list style-one">
                                                    <li><i className="far fa-check-circle"></i>4 Piece Chicken</li>
                                                    <li><i className="far fa-check-circle"></i>Spicy Sauce</li>
                                                </ul>
                                                <a href="menu-details.html" className="theme-btn style-two"><i className="far fa-cart-plus"></i> Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="menu-item style-four mb-30">
                                            <div className="menu-thumbnail">
                                                <img src="assets/images/product/product-1_10.jpg" alt="Image" />
                                            </div>
                                            <div className="menu-info">
                                                <div className="menu-meta">
                                                    <span className="price"><span className="currency">$</span>18.00</span>
                                                    <span className="rating"><i className="fas fa-star"></i><a href="#">4.7(375)</a></span>
                                                </div>
                                                <h4 className="title"><a href="menu-details.html">Korean BBQ Sizzling</a></h4>
                                                <ul className="check-list style-one">
                                                    <li><i className="far fa-check-circle"></i>4 Piece Chicken</li>
                                                    <li><i className="far fa-check-circle"></i>Spicy Sauce</li>
                                                </ul>
                                                <a href="menu-details.html" className="theme-btn style-two"><i className="far fa-cart-plus"></i> Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="menu-item style-four mb-30">
                                            <div className="menu-thumbnail">
                                                <img src="assets/images/product/product-1_11.jpg" alt="Image" />
                                            </div>
                                            <div className="menu-info">
                                                <div className="menu-meta">
                                                    <span className="price"><span className="currency">$</span>18.00</span>
                                                    <span className="rating"><i className="fas fa-star"></i><a href="#">4.7(375)</a></span>
                                                </div>
                                                <h4 className="title"><a href="menu-details.html">Mutton Sizzling</a></h4>
                                                <ul className="check-list style-one">
                                                    <li><i className="far fa-check-circle"></i>4 Piece Chicken</li>
                                                    <li><i className="far fa-check-circle"></i>Spicy Sauce</li>
                                                </ul>
                                                <a href="menu-details.html" className="theme-btn style-two"><i className="far fa-cart-plus"></i> Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="menu-item style-four mb-30">
                                            <div className="menu-thumbnail">
                                                <img src="assets/images/product/product-1_12.jpg" alt="Image" />
                                            </div>
                                            <div className="menu-info">
                                                <div className="menu-meta">
                                                    <span className="price"><span className="currency">$</span>18.00</span>
                                                    <span className="rating"><i className="fas fa-star"></i><a href="#">4.7(375)</a></span>
                                                </div>
                                                <h4 className="title"><a href="menu-details.html">Beef Wellington</a></h4>
                                                <ul className="check-list style-one">
                                                    <li><i className="far fa-check-circle"></i>4 Piece Chicken</li>
                                                    <li><i className="far fa-check-circle"></i>Spicy Sauce</li>
                                                </ul>
                                                <a href="menu-details.html" className="theme-btn style-two"><i className="far fa-cart-plus"></i> Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="cat4">
                                <div className="row">
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="menu-item style-four mb-30">
                                            <div className="menu-thumbnail">
                                                <img src="assets/images/product/product-1_13.jpg" alt="Image" />
                                            </div>
                                            <div className="menu-info">
                                                <div className="menu-meta">
                                                    <span className="price"><span className="currency">$</span>18.00</span>
                                                    <span className="rating"><i className="fas fa-star"></i><a href="#">4.7(375)</a></span>
                                                </div>
                                                <h4 className="title"><a href="menu-details.html">T-Bone Steak</a></h4>
                                                <ul className="check-list style-one">
                                                    <li><i className="far fa-check-circle"></i>4 Piece Chicken</li>
                                                    <li><i className="far fa-check-circle"></i>Spicy Sauce</li>
                                                </ul>
                                                <a href="menu-details.html" className="theme-btn style-two"><i className="far fa-cart-plus"></i> Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="menu-item style-four mb-30">
                                            <div className="menu-thumbnail">
                                                <img src="assets/images/product/product-1_14.jpg" alt="Image" />
                                            </div>
                                            <div className="menu-info">
                                                <div className="menu-meta">
                                                    <span className="price"><span className="currency">$</span>18.00</span>
                                                    <span className="rating"><i className="fas fa-star"></i><a href="#">4.7(375)</a></span>
                                                </div>
                                                <h4 className="title"><a href="menu-details.html">Tomahawk Steak</a></h4>
                                                <ul className="check-list style-one">
                                                    <li><i className="far fa-check-circle"></i>4 Piece Chicken</li>
                                                    <li><i className="far fa-check-circle"></i>Spicy Sauce</li>
                                                </ul>
                                                <a href="menu-details.html" className="theme-btn style-two"><i className="far fa-cart-plus"></i> Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="menu-item style-four mb-30">
                                            <div className="menu-thumbnail">
                                                <img src="assets/images/product/product-1_15.jpg" alt="Image" />
                                            </div>
                                            <div className="menu-info">
                                                <div className="menu-meta">
                                                    <span className="price"><span className="currency">$</span>18.00</span>
                                                    <span className="rating"><i className="fas fa-star"></i><a href="#">4.7(375)</a></span>
                                                </div>
                                                <h4 className="title"><a href="menu-details.html">Filet Steak</a></h4>
                                                <ul className="check-list style-one">
                                                    <li><i className="far fa-check-circle"></i>4 Piece Chicken</li>
                                                    <li><i className="far fa-check-circle"></i>Spicy Sauce</li>
                                                </ul>
                                                <a href="menu-details.html" className="theme-btn style-two"><i className="far fa-cart-plus"></i> Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="menu-item style-four mb-30">
                                            <div className="menu-thumbnail">
                                                <img src="assets/images/product/product-1_16.jpg" alt="Image" />
                                            </div>
                                            <div className="menu-info">
                                                <div className="menu-meta">
                                                    <span className="price"><span className="currency">$</span>18.00</span>
                                                    <span className="rating"><i className="fas fa-star"></i><a href="#">4.7(375)</a></span>
                                                </div>
                                                <h4 className="title"><a href="menu-details.html">Flank Steak</a></h4>
                                                <ul className="check-list style-one">
                                                    <li><i className="far fa-check-circle"></i>4 Piece Chicken</li>
                                                    <li><i className="far fa-check-circle"></i>Spicy Sauce</li>
                                                </ul>
                                                <a href="menu-details.html" className="theme-btn style-two"><i className="far fa-cart-plus"></i> Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="menu-item style-four mb-30">
                                            <div className="menu-thumbnail">
                                                <img src="assets/images/product/product-1_17.jpg" alt="Image" />
                                            </div>
                                            <div className="menu-info">
                                                <div className="menu-meta">
                                                    <span className="price"><span className="currency">$</span>18.00</span>
                                                    <span className="rating"><i className="fas fa-star"></i><a href="#">4.7(375)</a></span>
                                                </div>
                                                <h4 className="title"><a href="menu-details.html">Ribeye Steak</a></h4>
                                                <ul className="check-list style-one">
                                                    <li><i className="far fa-check-circle"></i>4 Piece Chicken</li>
                                                    <li><i className="far fa-check-circle"></i>Spicy Sauce</li>
                                                </ul>
                                                <a href="menu-details.html" className="theme-btn style-two"><i className="far fa-cart-plus"></i> Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="menu-item style-four mb-30">
                                            <div className="menu-thumbnail">
                                                <img src="assets/images/product/product-1_8.jpg" alt="Image" />
                                            </div>
                                            <div className="menu-info">
                                                <div className="menu-meta">
                                                    <span className="price"><span className="currency">$</span>18.00</span>
                                                    <span className="rating"><i className="fas fa-star"></i><a href="#">4.7(375)</a></span>
                                                </div>
                                                <h4 className="title"><a href="menu-details.html">Porterhouse Steak</a></h4>
                                                <ul className="check-list style-one">
                                                    <li><i className="far fa-check-circle"></i>4 Piece Chicken</li>
                                                    <li><i className="far fa-check-circle"></i>Spicy Sauce</li>
                                                </ul>
                                                <a href="menu-details.html" className="theme-btn style-two"><i className="far fa-cart-plus"></i> Add to Cart</a>
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
        <Footer />
    </>
  )
}
export default RecipiesListPage