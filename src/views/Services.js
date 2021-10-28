import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
    return (
        <>
            <header
                id="fh5co-header"
                className="fh5co-cover fh5co-cover-sm"
                role="banner"
                style={{ backgroundImage: "url(images/img_bg_2.jpg)" }}
            >
                <div className="overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <div className="display-t">
                                <div
                                    className="display-tc "
                                    data-animate-effect="fadeIn"
                                >
                                    <h1>BIG K2</h1>
                                    <h3>Services</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div id="fh5co-services" className="fh5co-bg-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 text-center">
                            <div
                                className="feature-center "
                                data-animate-effect="fadeIn"
                            >
                                <span className="icon">
                                    <i className="icon-credit-card" />
                                </span>
                                <h3>Credit Card</h3>
                                <p>
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts. Separated
                                    they live in Bookmarksgrove
                                </p>
                                <p>
                                    <Link to="#" className="btn btn-primary btn-outline">
                                        Learn More
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 text-center">
                            <div
                                className="feature-center "
                                data-animate-effect="fadeIn"
                            >
                                <span className="icon">
                                    <i className="icon-wallet" />
                                </span>
                                <h3>Save Money</h3>
                                <p>
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts. Separated
                                    they live in Bookmarksgrove
                                </p>
                                <p>
                                    <Link to="#" className="btn btn-primary btn-outline">
                                        Learn More
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 text-center">
                            <div
                                className="feature-center "
                                data-animate-effect="fadeIn"
                            >
                                <span className="icon">
                                    <i className="icon-paper-plane" />
                                </span>
                                <h3>Free Delivery</h3>
                                <p>
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts. Separated
                                    they live in Bookmarksgrove
                                </p>
                                <p>
                                    <Link to="#" className="btn btn-primary btn-outline">
                                        Learn More
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 text-center">
                            <div
                                className="feature-center "
                                data-animate-effect="fadeIn"
                            >
                                <span className="icon">
                                    <i className="icon-calendar" />
                                </span>
                                <h3>Lifetime Warranty</h3>
                                <p>
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts. Separated
                                    they live in Bookmarksgrove
                                </p>
                                <p>
                                    <Link to="#" className="btn btn-primary btn-outline">
                                        Learn More
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 text-center">
                            <div
                                className="feature-center "
                                data-animate-effect="fadeIn"
                            >
                                <span className="icon">
                                    <i className="icon-clapperboard" />
                                </span>
                                <h3>Branded Model</h3>
                                <p>
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts. Separated
                                    they live in Bookmarksgrove
                                </p>
                                <p>
                                    <Link to="#" className="btn btn-primary btn-outline">
                                        Learn More
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 text-center">
                            <div
                                className="feature-center "
                                data-animate-effect="fadeIn"
                            >
                                <span className="icon">
                                    <i className="icon-drive" />
                                </span>
                                <h3>Affordable</h3>
                                <p>
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts. Separated
                                    they live in Bookmarksgrove
                                </p>
                                <p>
                                    <Link to="#" className="btn btn-primary btn-outline">
                                        Learn More
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="gototop js-top">
                <Link to="#" class="js-gotop"><i class="icon-arrow-up"></i></Link>
            </div>
        </>

    )
}

export default Services;