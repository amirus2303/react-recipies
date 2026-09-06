const PageBanner = () => {
    return (
        <section className="page-banner">
            <div
                className="page-bg-wrapper p-r z-1 bg_cover pt-100 pb-110"
                style={{
                    backgroundImage: `url(/assets/images/bg/page-bg.jpg)`,
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <!--=== Page Banner Content ===--> */}
                            <div className="page-banner-content text-center">
                                <h1 className="page-title">Menu Restaurant</h1>
                                <ul className="breadcrumb-link">
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="active">Menu Restaurant</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default PageBanner;
