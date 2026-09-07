const Hero = () => {
    return (
        <section className="hero-section">
            {/* <!--=== Hero Wrapper ===--> */}
            <div
                className="hero-wrapper-three bg_cover"
                style={{
                    backgroundImage:
                        "url(assets/images/hero/hero-three_bg.jpg)",
                }}
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
                                    Recettes sans pareil
                                </h1>
                                <p
                                    className="wow fadeInDown"
                                    data-wow-delay=".6s"
                                >
                                    Laissez-vous tenter par des recettes sans
                                    pareil, savoureuses et généreuses, préparées
                                    pour faire de chaque repas un véritable
                                    moment de plaisir.
                                </p>
                                <div
                                    className="hero-button wow fadeInDown"
                                    data-wow-delay=".7s"
                                >
                                    <a
                                        href="index-2.html"
                                        className="theme-btn style-one"
                                    >
                                        Contact
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
