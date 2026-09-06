const Recipe = () => {
    return (
        <div className="col-xl-4 col-md-6 col-sm-12">
            <div className="menu-item style-four mb-30">
                <div className="menu-thumbnail">
                    <img
                        src="assets/images/product/product-1.jpg"
                        alt="Image"
                    />
                </div>
                <div className="menu-info">
                    <div className="menu-meta">
                        <span className="price">
                            <span className="currency">$</span>
                            18.00
                        </span>
                        <span className="rating">
                            <i className="fas fa-star"></i>
                            <a href="#">4.7(375)</a>
                        </span>
                    </div>
                    <h4 className="title">
                        <a href="menu-details.html">Beefy Bourbon Bliss</a>
                    </h4>
                    <ul className="check-list style-one">
                        <li>
                            <i className="far fa-check-circle"></i>4 Piece
                            Chicken
                        </li>
                        <li>
                            <i className="far fa-check-circle"></i>
                            Spicy Sauce
                        </li>
                    </ul>
                    <a href="menu-details.html" className="theme-btn style-two">
                        <i className="far fa-cart-plus"></i> Add to Cart
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Recipe;
