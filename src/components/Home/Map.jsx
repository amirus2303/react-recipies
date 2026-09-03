const Map = () => {
    return (
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
                            Happy Sunday Premium Pizza is a delightful blend of
                            grilled chicken Italian sausage.
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
    );
};
export default Map;
