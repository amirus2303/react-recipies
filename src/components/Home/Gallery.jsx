import { useLoaderData } from "react-router-dom";

import * as Slick from "react-slick";
const Slider = Slick.default.default;

const Gallery = () => {
    const { galleryImages } = useLoaderData();
    const { recipes } = galleryImages || {};
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
        nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 767, settings: { slidesToShow: 2 } },
            { breakpoint: 575, settings: { slidesToShow: 1 } },
        ],
    };

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
                                        Plaisir des yeux
                                    </span>
                                    <h2>Notre galerie</h2>
                                    <p>
                                        Plongez dans notre univers à travers une
                                        sélection de photos qui mettent en
                                        valeur nos plats, notre savoir-faire et
                                        chaque détail qui fait la différence.
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
                            <Slider {...settings}>
                                {recipes.map((recipe) => (
                                    <div className="gallery-item style-four">
                                        <div className="gallery-img">
                                            <img
                                                src={recipe.image}
                                                alt={recipe.name}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>{" "}
        </>
    );
};
export default Gallery;
