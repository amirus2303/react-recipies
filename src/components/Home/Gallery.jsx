const Gallery = () => {
    return (
        <>
            <section className="gallery-section">
                <div
                    className="gallery-wrapper-bg bg_cover pt-120 pb-130"
                    style={{
                        backgroundImage: "url(assets/images/bg/gallery-bg.jpg)",
                    }}
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
        </>
    );
};
export default Gallery;
