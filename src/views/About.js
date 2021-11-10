import React from "react";
import { Link } from "react-router-dom";

const About = () => {
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
                                    <h3>About Us</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header> */}
            <div id="fh5co-about">
                <div className="container">
                    <div className="about-content">
                        <div className="row ">
                            <div className="col-md-6">
                                <div className="desc">
                                    <h3>Company History</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                                        quo est quis mollitia ratione magni assumenda repellat atque
                                        modi temporibus tempore ex. Dolore facilis ex sunt ea
                                        praesentium expedita numquam?
                                    </p>
                                    <p>
                                        Quos quia provident consequuntur culpa facere ratione maxime
                                        commodi voluptates id repellat velit eaque aspernatur expedita.
                                        Possimus itaque adipisci rem dolorem nesciunt perferendis quae
                                        amet deserunt eum labore quidem minima.
                                    </p>
                                </div>
                                <div className="desc">
                                    <h3>Mission &amp; Vission</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                                        quo est quis mollitia ratione magni assumenda repellat atque
                                        modi temporibus tempore ex. Dolore facilis ex sunt ea
                                        praesentium expedita numquam?
                                    </p>
                                    <p>
                                        Quos quia provident consequuntur culpa facere ratione maxime
                                        commodi voluptates id repellat velit eaque aspernatur expedita.
                                        Possimus itaque adipisci rem dolorem nesciunt perferendis quae
                                        amet deserunt eum labore quidem minima.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img
                                    className="img-responsive"
                                    src="images/Big K2.jpg"
                                    alt="about"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <span>Productive Staff</span>
                            <h2>Meet Our Team</h2>
                            <p>
                                Dignissimos asperiores vitae velit veniam totam fuga molestias
                                accusamus alias autem provident. Odit ab aliquam dolor eius.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-md-4 col-sm-4 "
                            data-animate-effect="fadeIn"
                        >
                            <div className="fh5co-staff">
                                <img
                                    src="images/Bill Gates.jpg"
                                    alt=""
                                />
                                <h3>Jean Smith</h3>
                                <strong className="role">Chief Executive Officer</strong>
                                <p>
                                    Quos quia provident consequuntur culpa facere ratione maxime
                                    commodi voluptates id repellat velit eaque aspernatur expedita.
                                    Possimus itaque adipisci.
                                </p>
                                <ul className="fh5co-social-icons">
                                    <li>
                                        <Link to="#">
                                            <i className="icon-facebook" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="icon-twitter" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="icon-dribbble" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="icon-github" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-md-4 col-sm-4 "
                            data-animate-effect="fadeIn"
                        >
                            <div className="fh5co-staff">
                                <img
                                    src="images/Steve Jobs.jpg"
                                    alt=""
                                />
                                <h3>Hush Raven</h3>
                                <strong className="role">Co-Owner</strong>
                                <p>
                                    Quos quia provident consequuntur culpa facere ratione maxime
                                    commodi voluptates id repellat velit eaque aspernatur expedita.
                                    Possimus itaque adipisci.
                                </p>
                                <ul className="fh5co-social-icons">
                                    <li>
                                        <Link to="#">
                                            <i className="icon-facebook" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="icon-twitter" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="icon-dribbble" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="icon-github" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-md-4 col-sm-4 "
                            data-animate-effect="fadeIn"
                        >
                            <div className="fh5co-staff">
                                <img
                                    src="images/Lance Armstrong.jpg"
                                    alt=""
                                />
                                <h3>Alex King</h3>
                                <strong className="role">Co-Owner</strong>
                                <p>
                                    Quos quia provident consequuntur culpa facere ratione maxime
                                    commodi voluptates id repellat velit eaque aspernatur expedita.
                                    Possimus itaque adipisci.
                                </p>
                                <ul className="fh5co-social-icons">
                                    <li>
                                        <Link to="#">
                                            <i className="icon-facebook" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="icon-twitter" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="icon-dribbble" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="icon-github" />
                                        </Link>
                                    </li>
                                </ul>
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

export default About;