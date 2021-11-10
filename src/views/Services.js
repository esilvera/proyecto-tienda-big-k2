import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';


const Services = () => {

    const { store: { services, path, extension }, actions: { } } = useContext(Context);

    return (
        <>
            {/* <header
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
            </header> */}

            <div id="fh5co-services" className="fh5co-bg-section">
                <div className="container">
                    <div className="row">
                        {
                            services === null ? (
                                <div className="spinner-grow text-secondary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            ) :
                                services.map((service, index) => {
                                    const { service_name, service_icon } = service;

                                    return (
                                        <div className="col-md-4 col-sm-4 text-center">
                                            <div
                                                className="feature-center "
                                                data-animate-effect="fadeIn"
                                            >
                                                <span className="icon">
                                                    <i className={service_icon} />
                                                </span>
                                                <h3>{service_name}</h3>
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
                                    )
                                })
                        }
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